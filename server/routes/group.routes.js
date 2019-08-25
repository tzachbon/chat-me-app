const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwt.middleware');
const Group = require('../models/group.model');
const User = require('../models/user.model');

router.get('/:_id', jwtMiddleware, async (req, res) => {
  const { _id } = req.params;
  const user = await User.findOne({ _id }).populate('groups.groupId');
  const { groups } = user;
  res.status(200).json({
    isValid: true,
    body: {
      groups
    }
  });
});

router.post('/:id', jwtMiddleware, async (req, res) => {
  const { _id, groupData } = req.params;
  const group = new Group({ ...groupData });
  await group.save();
  res.status(201).json({
    isValid: true,
    body: {
      group
    }
  });
});

module.exports = router;
