const { pool } = require("../database/mariadb");

async function getAllCommentsByUserId(userId) {
    try {
        const comment = await pool.query(
            'SELECT commentID, userID, recipeID, rating, comment, created_at FROM comments_ratings WHERE userID = ?',
            [userId]
        );
        if (comment.length === 0) {
            return { message: `No Comments by this User found`, code: 404 };
        }
        return { message: comment, code: 200 };
    } catch (err) {
        return { message: `An error occurred`, code: 500 };
    }
}

async function getCommentsByRecipeId(recipeId) {
    try {
        const comments = await pool.query(`
            SELECT 
                c.commentID,
                c.userID,
                u.username,       
                u.picture,  
                c.recipeID,
                c.rating,
                c.comment,
                c.created_at
            FROM comments_ratings c
            JOIN user u ON c.userID = u.userID
            WHERE c.recipeID = ? AND u.is_deleted = 0
        `, [recipeId]);


        return {
            message: comments,
            code: 200
        };
    } catch (err) {
        return { message: 'An error occurred', code: 500 };
    }
}

async function deleteComment(commentID, userID) {
    try {
        const result = await pool.query(
            `DELETE FROM comments_ratings WHERE commentID = ? AND userID = ?`,
            [commentID, userID]
        );

        if (result.affectedRows === 0) {
            return { code: 404, message: 'Kommentar nicht gefunden oder keine Berechtigung' };
        }

        return { code: 200, message: 'Kommentar erfolgreich gelöscht' };
    } catch (err) {
        return { code: 500, message: 'Fehler beim Löschen des Kommentars' };
    }
}

async function postComment(recipeid, userid, rating, comment, created_at) {
    let conn = await pool.getConnection();
    try {
        await conn.query(
            `INSERT INTO comments_ratings (userID, recipeID, rating, comment, created_at)
             VALUES (?, ?, ?, ?, ?)`,
            [userid, recipeid, rating, comment, created_at]
        );
    } catch (err) {
        return { message: `An error occurred`, code: 500 };
    } finally {
        await conn.release();
    }
    return { message: 'Comment Posted', code: 200 };
}

module.exports = {
    getAllCommentsByUserId,
    getCommentsByRecipeId,
    postComment,
    deleteComment
};
