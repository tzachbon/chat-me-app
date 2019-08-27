const mongoose = require('mongoose');
const User = require('./user.model');
const Image = require('./image.model');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: mongoose.Schema.ObjectId, ref: 'Image' },
  users: {
    type: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        role: { type: String }
      }
    ],
    required: true
  },
  messages: {
    type: [
      {
        message: {
          type: String,
          require: true
        },
        date: {
          type: Date,
          require: true
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      }
    ],
    default: []
  }
});

const saveGroup = async groupData => {
  const { image } = groupData;
  const imageSchema = new Image({ image });
  await imageSchema.save();
  groupData.image = imageSchema._id;
  const group = new Group(groupData);
  for (const userData of [...groupData.users]) {
    try {
      let user = await User.findOne({ _id: userData.userId }).exec();
      const role = group.users.find(user => user.userId == userData.userId)
        .role;
      const groups = [...user.groups, { _id: group._id, role }];
      user = await User.findOneAndUpdate(
        { _id: userData.userId },
        {
          groups
        }
      );
      await group.save();
    } catch (error) {
      console.log(error);
    }
  }
  return group;
};

groupSchema.static('saveGroup', saveGroup);

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
