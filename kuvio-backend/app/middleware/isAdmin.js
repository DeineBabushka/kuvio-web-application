const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'mein_geheimes_token_passwort';

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Kein Token übergeben.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(token, secret);; // z.B. { id, username, role }
    console.log(req.user)
    if(req.user.role !== 'admin') {
      return res.status(401).json({ message: 'User is not admin' });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Ungültiges Token.' });
  }
}; //prüft das Token, verifiziert es mit Geheimen Schlüssel (secret) und hängt den Unser an die Anfrage (req.user)