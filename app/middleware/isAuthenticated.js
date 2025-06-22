const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token fehlt oder ungültig' });
  }

  const token = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(token, secret);
  } catch (err) {
    return res.status(403).json({ message: 'Token ungültig oder abgelaufen' });
  }

  if(!req.user) {
    return res.status(403).json({ message: 'Token is empty' });
  }

  if(!req.params.id) {
    next()
    return
  }

  if(req.user.role === "admin") {
    next()
    return
  }

  next()
};

