const {
    getOwnProfileAction,
    deleteUserPermanentlyAction,
    getUserPublicAction,
    getUserAction,
    getAllUsersAction,
    updateUserAction,
    deleteUserAction
} = require('../controllers/UserController.js')

const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated');
const isAdmin = require('../middleware/isAdmin');

router.get('/profile', isAuthenticated, getOwnProfileAction);

router.get('/public/:username', getUserPublicAction)

router.get('/:id', isAuthenticated, getUserAction);

router.put('/:id', isAuthenticated, updateUserAction);

router.delete('/:id', isAuthenticated, deleteUserAction);

router.delete('/admin/:id', isAuthenticated, isAdmin, deleteUserPermanentlyAction)

router.get('/', isAuthenticated, isAdmin, getAllUsersAction);

module.exports = router;
