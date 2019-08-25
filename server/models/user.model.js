const mongoose = require('mongoose');

const imageUri =
  'https://www.uclg-learning.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: false, default: imageUri },
  groups: {
    type: [
      {
        groupId: mongoose.Schema.Types.ObjectId,
        ref: 'group'
      }
    ]
  }
});
