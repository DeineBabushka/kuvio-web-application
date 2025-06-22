const { loginAction, registerAction, logoutAction } = require('../controllers/AuthController.js')

const express = require('express');
const router = express.Router();



router.post('/login', loginAction)

router.post('/register', registerAction)

router.post('/logout', logoutAction)


module.exports = router;
