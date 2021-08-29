const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({error : "Access denied. No token provided"});

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    req.userId = decoded.userId;
    next();
  }
  catch (ex) {
    res.status(400).json({error : "Invalid token"});
  }
}