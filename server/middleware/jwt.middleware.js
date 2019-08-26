const jwt = require('jsonwebtoken');
const secret = require('../util/secret.util');

module.exports = (req, res, next) => {
  let token, decodedToken, authHeader;

  try {
    authHeader = req.get('authorization');
    token = authHeader.split(' ')[1];
    decodedToken = jwt.verify(token, secret);

    if (!authHeader) {
      handleError(res);
    }

    req.user = decodedToken._doc;
    next();
  } catch (e) {
    res.status(500).json({
      isValid: false,
      body: {
        error: 'Verifying token failed'
      }
    });
  }
};

const handleError = res => {
  res.status(401).json({
    isValid: false,
    body: {
      error: 'Unauthorized'
    }
  });
};
