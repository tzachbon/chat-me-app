const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupName: { type: String },
  groupUsers: {
    type: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
      }
    ],
    required: true
  },
  messages: {
    type: [
      {
        message: String,
        require: true
      },
      {
        userId: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
      }
    ]
  }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
