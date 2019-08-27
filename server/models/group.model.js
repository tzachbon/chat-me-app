const mongoose = require('mongoose');
const User = require('./user.model');

const image =
  'https://631ae89fcd069a398187-ee282e5b70d98fac94cba689ef7806d7.ssl.cf1.rackcdn.com/default_group_normal.png';

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, default: image },
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
