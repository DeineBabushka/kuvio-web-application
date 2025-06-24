const { getRandomRecipes, getAllRecipes, getRecipeById, getRecipeByQuery } = require('../models/RecipeModel');
const {response} = require("express");

async function getAllRecipesAction(req, res) {
  try {
    const recipes = await getAllRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Rezepte' });
  }
}

async function getRecipeByIdAction(req, res) {
  try {
    const id = req.params.id;
    const recipe = await getRecipeById(id);

    if (!recipe) {
      return res.status(404).json({ error: 'Rezept nicht gefunden' });
    }

    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Fehler beim Abrufen des Rezepts' });
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


module.exports = {
  getAllRecipesAction,
  getRecipeByIdAction,
  getRandomRecipesAction,
  getRecipeByQueryAction
};