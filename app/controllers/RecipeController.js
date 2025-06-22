// Importiert die Funktionen zum Datenzugriff aus dem RecipeModel
const { getRandomRecipes, getAllRecipes, getRecipeById, getRecipeByQuery } = require('../models/RecipeModel');
const {response} = require("express");

// Diese Funktion wird bei GET /api/recipes aufgerufen
async function getAllRecipesAction(req, res) {
  try {
    const recipes = await getAllRecipes(); // Holt alle Rezepte aus der Datenbank\
    // console.log(recipes);
    res.status(200).json(recipes);         // Sendet sie als JSON-Antwort zurück
  } catch (err) {
    console.error('Fehler beim Abrufen der Rezepte:', err);
    res.status(500).json({ error: 'Fehler beim Abrufen der Rezepte' }); // Fehlerantwort
  }
}

// Funktion: Holt ein einzelnes Rezept anhand der ID
// Diese Funktion wird bei GET /api/recipes/:id aufgerufen
async function getRecipeByIdAction(req, res) {
  try {
    const id = req.params.id;                  // Holt die ID aus der URL
    const recipe = await getRecipeById(id);    // Holt das entsprechende Rezept aus der DB

    if (!recipe) {
      // Falls kein Rezept gefunden wurde, sendet 404-Fehler
      return res.status(404).json({ error: 'Rezept nicht gefunden' });
    }

    res.status(200).json(recipe); // Gibt das gefundene Rezept zurück
  } catch (err) {
    console.error('Fehler beim Abrufen des Rezepts:', err);
    res.status(500).json({ error: 'Fehler beim Abrufen des Rezepts' }); // Fehlerantwort
  }
}

async function getRandomRecipesAction(request, response) {
  let status = await getRandomRecipes();
  response.status(status.code).json(status.message);
}

async function getRecipeByQueryAction(request, response) {
  let status = await getRecipeByQuery(request.body);
  response.status(status.code).json(status.message);
}


// Exportiert die Funktionen, damit sie in den Routen eingebunden werden können
module.exports = {
  getAllRecipesAction,
  getRecipeByIdAction,
  getRandomRecipesAction,
  getRecipeByQueryAction
};