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
    if (_id) {
      const promise = Image.findOne({ _id }).exec();
      promises.push(promise);
    } else {
      promises.push(
        new Promise((res, rej) => {
          res(null);
        })
      );
    }
  });

  const images = await Promise.all(promises);
  res.status(200).json({
    isValid: true,
    body: {
      images
    }
  });
});

router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  const image = await Image.findOne({ _id });
  res.status(200).json({
    isValid: true,
    body: {
      image
    }
  });
});

module.exports = router;
