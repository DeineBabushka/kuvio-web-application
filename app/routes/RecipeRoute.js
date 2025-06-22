// Importiert die Funktionen zum Abrufen einzelner und aller Rezepte aus dem Controller
const express = require('express');
const {getAllRecipesAction, getRecipeByIdAction, getRandomRecipesAction, getRecipeByQueryAction} = require('../controllers/RecipeController');
const recipeController = require('../controllers/RecipeController'); 

const router = express.Router(); // Erstellt einen neuen Router, um API-Routen zu definieren

router.get('/', getAllRecipesAction); // führt beim Aufruf von /api/recipes die Funktion getAllRecipes
router.get('/random', getRandomRecipesAction); // Random Rezepte
router.get('/:id', getRecipeByIdAction); // Einzelnes Rezept abrufen: GET /api/recipes/:id
router.post('/search', getRecipeByQueryAction);



module.exports = router; // Exportiert den Router, damit er in app.js eingebunden werden kann

