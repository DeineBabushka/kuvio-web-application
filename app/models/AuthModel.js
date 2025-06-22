const { pool } = require('../database/mariadb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

async function login(user) {
    const [rows] = await pool.query('SELECT * FROM user WHERE username = ?', [user.username]);

    if (!rows || rows.length === 0) {
        return { message: `Benutzer existiert nicht`, code: 401 };
    }

    const storedUser = rows;
    const match = await bcrypt.compare(user.password, storedUser.password);

    if (!match) {
        return { message: `Passwort ist falsch!`, code: 401 };
    }

    const token = jwt.sign(

        {
            id: storedUser.userID,
            username: storedUser.username,
            role: storedUser.role
        },

        secret,
        { expiresIn: '1d' }

    );

    return { message: 'Login erfolgreich', token, code: 200 };
}

async function register(user) {
    let conn = await pool.getConnection();
    try {
        const hashed = await bcrypt.hash(user.password, 10);
        await conn.query(
            'INSERT INTO user (picture, firstname, lastname, username, password, role) VALUES (?, ?, ?, ?, ?, ?)',
            [user.picture, user.firstname, user.lastname, user.username, hashed, user.role || 'user']
        );
    } catch (err) {
        return { message: `An error occurred`, code: 500 };
    } finally {
        await conn.release();
    }
    return { message: 'User registered', code: 200 };
}

module.exports = {
    login,
    register
};