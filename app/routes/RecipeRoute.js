const express = require('express');
const {getAllRecipesAction, getRecipeByIdAction, getRandomRecipesAction, getRecipeByQueryAction} = require('../controllers/RecipeController');

const router = express.Router();

router.get('/', getAllRecipesAction);
router.get('/random', getRandomRecipesAction);
router.get('/:id', getRecipeByIdAction);
router.post('/search', getRecipeByQueryAction);



module.exports = router;

