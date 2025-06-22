const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated');

const {
    getAllCommentsByUserIdAction,
    getAllCommentsByRecipeIdAction,
    postCommentAction,
    deleteCommentAction
} = require('../controllers/CommentController');

// Kommentare zu einem Rezept
router.get('/recipe/:recipeID', getAllCommentsByRecipeIdAction);

// Kommentare eines Users
router.get('/user/:userID', isAuthenticated, getAllCommentsByUserIdAction);

router.post('/', isAuthenticated, postCommentAction);


// Kommentar löschen
router.delete('/:commentID', isAuthenticated, deleteCommentAction);
module.exports = router;