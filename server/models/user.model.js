const mongoose = require('mongoose');

// const imageUri =
//   'https://www.uclg-learning.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    required: false
  },
  groups: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
      },
      role: {
        type: String,
        default: 'regular'
      }
    }
  ]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
