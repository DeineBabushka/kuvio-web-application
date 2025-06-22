const express = require('express');
const router = express.Router();
const {
  addFavoriteAction,
  removeFavoriteAction,
  getFavoritesAction
} = require('../controllers/FavoriteController');

router.post('/:userId/:recipeId', addFavoriteAction);

router.delete('/:userId/:recipeId', removeFavoriteAction);

router.get('/:userId', getFavoritesAction);

module.exports = router;
