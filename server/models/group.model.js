const mongoose = require('mongoose');
const User = require('./user.model');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  users: {
    type: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
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
  const group = new Group(groupData);
  for (const userData of [...groupData.users]) {
    try {
      let user = await User.findOne({ _id: userData.userId }).exec();
      const groups = [...user.groups, group._id];
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
