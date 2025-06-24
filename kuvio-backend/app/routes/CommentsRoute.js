const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated');

const {
    getAllCommentsByUserIdAction,
    getAllCommentsByRecipeIdAction,
    postCommentAction,
    deleteCommentAction
} = require('../controllers/CommentController');

router.get('/recipe/:recipeID', getAllCommentsByRecipeIdAction);

router.get('/user/:userID', getAllCommentsByUserIdAction);

router.post('/', isAuthenticated, postCommentAction);

router.delete('/:commentID', isAuthenticated, deleteCommentAction);


module.exports = router;