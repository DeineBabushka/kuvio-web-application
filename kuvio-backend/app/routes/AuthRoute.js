const { loginAction, registerAction } = require('../controllers/AuthController.js')

const express = require('express');
const router = express.Router();



router.post('/login', loginAction)

router.post('/register', registerAction)


module.exports = router;
