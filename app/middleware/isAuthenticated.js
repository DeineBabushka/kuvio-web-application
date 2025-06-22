const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'mein_geheimes_token_passwort';

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token fehlt oder ungültig' });
  }

  const token = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(token, secret); // z.B. { id, username, role }
    console.log(req.user)
  } catch (err) {
    console.log(err)
    return res.status(403).json({ message: 'Token ungültig oder abgelaufen' });
  }

  if(!req.user) {
    return res.status(403).json({ message: 'Token is empty' });
  }

  if(!req.params.id) {
    console.log("No ID specified - continue action")
    next()
    return
  }

  if(req.user.role === "admin") {
    console.log("Admin Bypass - continue action")
    next()
    return
  }

  next()
};

//Prüft, ob der JWT-Token gültig ist und speicher User-Daten in req.user.
