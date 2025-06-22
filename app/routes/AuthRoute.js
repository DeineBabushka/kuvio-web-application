const { loginAction, registerAction, logoutAction } = require('../controllers/AuthController.js')

const express = require('express');
const router = express.Router();



// POST Einloggen (generiert Sessiontoken und sendet and client zurück
// stellt außerdem Assoziation von userid und sessiontoken im backend her)
router.post('/login', loginAction)

// POST Registrierung (registriert neuen User und hashed Passwort)
router.post('/register', registerAction)

// POST Logout (Token wird im Backend invalidiert)
router.post('/logout', logoutAction)


module.exports = router;
