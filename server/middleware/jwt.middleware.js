const jwt = require('jsonwebtoken');
const secret = require('../util/secret.util');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    handleError(res);
  }

  const token = authHeader.split(' ')[1];

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, secret);
  } catch (e) {
    res.status(500).json({
      isValid: false,
      body: {
        error: 'Verifying token failed'
      }
    });
  }

  req.user = decodedToken._doc;
  next();
};

const handleError = res => {
  res.status(401).json({
    isValid: false,
    body: {
      error: 'Unauthorized'
    }
  });
};
