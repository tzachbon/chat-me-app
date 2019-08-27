const express = require('express');
const router = express.Router();
const Image = require('../models/image.model');
const jwtMiddleware = require('../middleware/jwt.middleware');

router.post('/', jwtMiddleware, async (req, res) => {
  imagesArray = req.body.images;
  console.log('====================================');
  console.log(imagesArray);
  console.log('====================================');
  const promises = [];
  imagesArray.forEach(_id => {
    const promise = Image.findOne({ _id }).exec();
    promises.push(promise);
  });

  const images = await Promise.all(promises);
  res.status(200).json({
    isValid: true,
    body: {
      images
    }
  });
});

module.exports = router;
