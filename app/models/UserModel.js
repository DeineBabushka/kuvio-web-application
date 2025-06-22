const { pool } = require('../database/mariadb')
const bcrypt = require("bcrypt");

async function get(userid) {
    try {
        const user = await pool.query('SELECT * FROM user WHERE userID = ? AND is_deleted = 0', [userid]);
        if (!user[0]) {
            return { message: `User does not exist`, code: 404 };
        }
        return { message: user[0], code: 200 };
    } catch (err) {
        return { message: `An error occured`, code: 500 };
    }
}

async function getAll() {
    try {
        const user = await pool.query('SELECT * FROM user');
        if (!user) {
            return { message: `User does not exist`, code: 404 };
        }
        return { message: user, code: 200 };
    } catch (err) {
        return { message: `An error occured`, code: 500 };
    }
}

async function getUserPublic(username) {
    try {
        const user = await pool.query('SELECT userID, picture, firstname, lastname, username, role FROM user WHERE username = ? AND is_deleted = 0', [username]);
        if (!user[0]) {
            return { message: `User does not exist`, code: 404 };
        }
        return { message: user[0], code: 200 };
    } catch (err) {
        return { message: `An error occured`, code: 500 };
    }
}

async function update(user) {
    let conn = await pool.getConnection()
    const updates = []
    const values = []

    if (user.picture && user.picture.trim() !== '') {
        updates.push('picture = ?')
        values.push(user.picture)
    }

    if (user.firstname && user.firstname.trim() !== '') {
        updates.push('firstname = ?')
        values.push(user.firstname)
    }

    if (user.lastname && user.lastname.trim() !== '') {
        updates.push('lastname = ?')
        values.push(user.lastname)
    }

    if (user.password && user.password.trim() !== '') {
        updates.push('password = ?')
        user.password = await bcrypt.hash(user.password, 10);
        values.push(user.password)
    }

    if (user.preferences && user.preferences.trim() !== '') {
        updates.push('preferences = ?')
        values.push(user.preferences)
    }

    values.push(user.userid)

    try {
        const result = await conn.query(
            `UPDATE user SET ${updates.join(',')} WHERE userID = ?`,
            values
        )
    }
    catch (err) {
        return { message: `An error occured`, code: 500 }
    }
    finally {
        await conn.release()
    }
    return { message: 'User updated', code: 200 }
}

async function deleteUser(userid) {
    let conn = await pool.getConnection();
    try {
        const result = await conn.query('UPDATE user SET is_deleted = 1 WHERE userID = ?', [userid]);
    } catch (err) {
        return { message: `An error occurred`, code: 500 };
    } finally {
        await conn.release();
    }
    return { message: 'User marked as deleted', code: 200 };
}

async function deleteUserPermanently(userid) {
    let conn = await pool.getConnection();
    try {
        await conn.query('DELETE FROM user WHERE userID = ?', [userid]);
    } catch (err) {
        return { message: `An error occurred`, code: 500 };
    } finally {
        await conn.release();
    }
    return { message: 'User permanently deleted', code: 200 };
}

module.exports = {
    get,
    getUserPublic,
    getAll,
    update,
    deleteUser,
    deleteUserPermanently
}