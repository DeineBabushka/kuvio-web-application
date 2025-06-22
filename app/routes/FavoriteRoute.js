// app/routes/FavoriteRoute.js
const express = require('express');
const router = express.Router();
const {
  addFavoriteAction,
  removeFavoriteAction,
  getFavoritesAction
} = require('../controllers/FavoriteController');

// POST /api/favorites/:userId/:recipeId → Favorit hinzufügen
router.post('/:userId/:recipeId', addFavoriteAction);

// DELETE /api/favorites/:userId/:recipeId → Favorit entfernen
router.delete('/:userId/:recipeId', removeFavoriteAction);

// GET /api/favorites/:userId → Alle Favoriten abrufen
router.get('/:userId', getFavoritesAction);

module.exports = router;
