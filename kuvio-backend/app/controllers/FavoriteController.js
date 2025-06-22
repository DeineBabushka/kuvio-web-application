// app/controllers/FavoriteController.js
const {
  addFavoriteToUser,
  getFavoritesByUser,
  removeFavoriteFromUser
} = require('../models/FavoriteModel');

/**
 * Gibt alle Favoriten für einen bestimmten Benutzer zurück.
 */
async function getFavoritesAction(req, res) {
  const userId = req.params.userId; // ⚠️ nicht parsen!
  const result = await getFavoritesByUser(userId);
  res.status(result.code).json({ message: result.message });
}

/**
 * Fügt ein Rezept zu den Favoriten des Benutzers hinzu.
 */
async function addFavoriteAction(req, res) {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  if (!userId || !recipeId) {
    return res.status(400).json({ message: 'UserID und RecipeID sind erforderlich' });
  }

  const result = await addFavoriteToUser(userId, recipeId);
  res.status(200).json({ message: 'Favorit hinzugefügt', details: result });
}

/**
 * Entfernt ein Rezept aus den Favoriten.
 */
async function removeFavoriteAction(req, res) {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  if (!userId || !recipeId) {
    return res.status(400).json({ message: 'UserID und RecipeID sind erforderlich' });
  }

  const result = await removeFavoriteFromUser(userId, recipeId);
  res.status(200).json({ message: 'Favorit entfernt', details: result });
}

module.exports = {
  getFavoritesAction,
  addFavoriteAction,
  removeFavoriteAction
};
