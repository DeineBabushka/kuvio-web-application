const { getAllCommentsByUserId, getCommentsByRecipeId, postComment, deleteComment } = require('../models/CommentModel')

async function getAllCommentsByUserIdAction(request, response) {
    let userid = request.params.userID
    if (!userid) {
        response.status(400).json({ message: 'UserID is required' })
    }
    let comments = await getAllCommentsByUserId(userid)
    response.status(comments.code).json({ message: comments.message })
}

async function getAllCommentsByRecipeIdAction(request, response) {
    let recipeId = request.params.recipeID
    if (!recipeId) {
        response.status(400).json({ message: 'Recipe ID is required' })
    }
    let comments = await getCommentsByRecipeId(recipeId)
    response.status(comments.code).json({ message: comments.message })
}

async function postCommentAction(request, response) {
    let userid = request.body.id
    let recipeId = request.body.recipeID
    let comment = request.body.comment
    let rating = request.body.rating
    let created_at = request.body.created_at;
    if (!userid) {
        response.status(400).json({ message: 'UserID is required' })
    }
    if (!recipeId) {
        response.status(400).json({ message: 'Recipe ID is required' })
    }
    if (!comment) {
        response.status(400).json({ message: 'Comment is required' })
    }
    if (!rating) {
        response.status(400).json({ message: 'Rating is required' })
    }
    let status = await postComment(recipeId, userid, rating, comment, created_at)
    response.status(status.code).json({ message: status.message })
}

async function deleteCommentAction(req, res) {
    const commentID = req.params.commentID;
    const userID = req.user.id; // aus JWT-Token extrahiert

    if (!commentID) {
        return res.status(400).json({ message: 'commentID fehlt' });
    }

    const result = await deleteComment(commentID, userID);
    return res.status(result.code).json({ message: result.message });
}

module.exports = {
    getAllCommentsByUserIdAction,
    getAllCommentsByRecipeIdAction,
    postCommentAction,
    deleteCommentAction
}