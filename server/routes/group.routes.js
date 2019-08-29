const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwt.middleware');
const Group = require('../models/group.model');
const User = require('../models/user.model');
const io = require('../util/socket.util');
const webPush = require('web-push');
const notificationService = require('../util/notification-keys.util');
const notificationCreator = notificationService.notificationCreator;

webPush.setVapidDetails(
  'mailto:tzachbonfil@gmail.com',
  notificationService.publicKey,
  notificationService.privateKey
);

router.post('/add-group', jwtMiddleware, async (req, res) => {
  let { group } = req.body;
  group = await Group.saveGroup(group);
  res.status(201).json({
    isValid: true,
    body: {
      group
    }
  });
});

router.post('/send-message', jwtMiddleware, async (req, res) => {
  const { groupId, message } = req.body;
  let group = await Group.findOne({ _id: groupId });
  const messages = [...group.messages, message];
  group = await Group.findOneAndUpdate(
    { _id: groupId },
    {
      messages
    }
  ).populate('users.userId');

  const user = await User.findOne({ _id: message.userId }).populate('image');
  message.userId = user;
  io.getIO().emit(groupId, {
    action: 'message',
    data: {
      message
    }
  });

  res.status(201).json({
    isValid: true,
    body: {
      group
    }
  });

  const users = group.users.map(user => user.userId);
  const payload = notificationCreator({
    title: `Message From ${user.fullName}`,
    icon: './assets/icons/icon-144x144.png',
    body: message.message
  });
  const promises = [];
  users.forEach(userData => {
    if (userData.subscription) {
      const p = webPush.sendNotification(userData.subscription, payload);
      promises.push(p);
    }
  });

  const pRes = await Promise.all(promises);
});

router.get('/messages/:groupId/:userId', jwtMiddleware, async (req, res) => {
  const { groupId, userId } = req.params;
  const group = await Group.findOne({ _id: groupId }).populate({
    path: 'messages.userId',
    populate: {
      path: 'image'
    }
  });
  const isUserInTheGroup = group.users.find(user => user.userId == userId);
  if (isUserInTheGroup) {
    res.status(200).json({
      isValid: true,
      body: {
        messages: group.messages,
        group
      }
    });
  } else {
    res.status(401).json({
      isValid: false,
      body: {
        error: 'Unauthorized'
      }
    });
  }
});

router.get('/:_id', jwtMiddleware, async (req, res) => {
  const { _id } = req.params;
  const user = await User.findOne({ _id }).populate('groups._id');
  const { groups } = user;
  res.status(200).json({
    isValid: true,
    body: {
      groups
    }
  });
});

module.exports = router;
