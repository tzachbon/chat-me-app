const express = require('express');
const router = express();
const User = require('../models/user.model');
const secret = require('../util/secret.util');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtMiddleware = require('../middleware/jwt.middleware');
const Image = require('../models/image.model');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const webPush = require('web-push');
const transporter = require('nodemailer').createTransport(
  sendGridTransport({
    auth: {
      api_key: `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`
    }
  })
);


router.post('/subscription', async (req, res) => {
  const { subscription, userId } = req.body;

  const user = await User.findOneAndUpdate(
    { _id: userId },
    {
      subscription
    }
  );

  const payload = {
    notification: {
      title: 'ChatMeApp Team',
      body: `Thank you ${user.fullName} for registering the subscription service!,`,
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Go to the site'
        }
      ]
    }
  };

  const send = await webPush.sendNotification(
    subscription,
    JSON.stringify(payload)
  );
  console.log('====================================');
  console.log(send, user);
  console.log('====================================');
  res.status(201).json({
    isValid: true,
    body: {
      send
    }
  });
});

router.post('/sign-up', async (req, res) => {
  const { password, email, image } = req.body;
  const findEmail = await User.findOne({ email });
  if (!findEmail) {
    req.body.password = await bcrypt.hash(password, 12);
    const imageSchema = new Image({ image });
    await imageSchema.save();
    req.body.image = imageSchema._id;
    const user = await new User({ ...req.body, groups: [] });
    await user.save();
    const token = jwt.sign({ ...user }, secret, {
      expiresIn: '1h'
    });
    user.password = '';
    transporter.sendMail({
      to: email,
      from: `donotreply@chat-me-app.com`,
      subject: 'Sign Up Successfully',
      html: `
      <h1>You successfully signed up!</h1>
      <hr/>
      <a href="https://chat-me-app-free.herokuapp.com/">Click here to redirect to the app!</a>
      `
    });
    res.status(201).json({
      isValid: true,
      body: {
        user,
        token
      }
    });
  } else {
    res.status(400).json({
      isValid: false,
      body: {
        error: 'Email Already Exists'
      }
    });
  }
});

router.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid && user) {
      user.password = '';
      user.image = '';
      const token = jwt.sign({ ...user }, secret, {
        expiresIn: '1h'
      });

      res.status(200).json({
        isValid: true,
        body: {
          user,
          token
        }
      });
    } else {
      throw new Error('User Is Not Authorized');
    }
  } catch (error) {
    res.status(401).json({
      isValid: false,
      body: {
        error
      }
    });
  }
});

router.get('/:name', jwtMiddleware, async (req, res) => {
  const { name } = req.params;
  let users;
  if (!name) {
    users = [];
  } else {
    users = await User.find({ fullName: new RegExp(name, 'i') });
  }
  res.status(200).json({
    isValid: true,
    body: {
      users
    }
  });
});

module.exports = router;
