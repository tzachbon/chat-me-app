const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwt.middleware');
const Group = require('../models/group.model');
const User = require('../models/user.model');

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

router.get('/:_id', jwtMiddleware, async (req, res) => {
  const { _id } = req.params;
  const user = await User.findOne({ _id }).populate('groups._id');
  console.log(user);
  const { groups } = user;
  res.status(200).json({
    isValid: true,
    body: {
      groups
    }
  });
});

module.exports = router;
