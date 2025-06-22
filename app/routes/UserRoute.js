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

// Profil des eingeloggten Nutzers (aus Token)
router.get('/profile', isAuthenticated, getOwnProfileAction);

router.get('/public/:username', getUserPublicAction)

// Nutzer darf sein eigenes Profil abrufen
router.get('/:id', isAuthenticated, getUserAction);

// Nutzer darf sein eigenes Profil aktualisieren
router.put('/:id', isAuthenticated, updateUserAction);

// Nutzer darf Löschung anfragen (nicht endgültig!)
router.delete('/:id', isAuthenticated, deleteUserAction);

// Admin darf Nutzer wirklich löschen (z. B. nach Anfrage)
router.delete('/admin/:id', isAuthenticated, isAdmin, deleteUserPermanentlyAction)

router.get('/', isAuthenticated, isAdmin, getAllUsersAction);

module.exports = router;
