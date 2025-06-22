const { pool } = require('../database/mariadb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'mein_geheimes_token_passwort'; // später in .env auslagern!

// LOGIN
async function login(user) {
    const [rows] = await pool.query('SELECT * FROM user WHERE username = ?', [user.username]);

    if (!rows || rows.length === 0) {
        return { message: `Benutzer existiert nicht`, code: 401 };
    }

    console.log(rows)
    const storedUser = rows;
    console.log(storedUser)
    const match = await bcrypt.compare(user.password, storedUser.password);

    if (!match) {
        return { message: `Passwort ist falsch!`, code: 401 };
    }

    const token = jwt.sign( //verschlüsseltes Token, welches ich z.B. bei Login an Client zurücgebe um später zu Prüfen, wer der Nutzer ist.

        {
            id: storedUser.userID,
            username: storedUser.username,
            role: storedUser.role   // Rollen nun neu dazu :) 
        },//Infos, die ich später im req.user nachlesen kann. Ich speichere hier also ID, Benutzername und Rolle des Users im Token.

        secret,
        { expiresIn: '1d' }//Token läuft nach 1 Tag ab, danach muss Benutzer neu anmelden

    );//secret ist mein gemeiner Schlüssel, nur wer secret kennt, kann später Token prüfen.

    return { message: 'Login erfolgreich', token, code: 200 };
}

// REGISTER
async function register(user) {
    let conn = await pool.getConnection();
    try {
        const hashed = await bcrypt.hash(user.password, 10);
        await conn.query(
            'INSERT INTO user (picture, firstname, lastname, username, password, role) VALUES (?, ?, ?, ?, ?, ?)',
            [user.picture, user.firstname, user.lastname, user.username, hashed, user.role || 'user']
        );
    } catch (err) {
        console.log(err);
        return { message: `An error occurred`, code: 500 };
    } finally {
        await conn.release();
    }
    return { message: 'User registered', code: 200 };
}

// LOGOUT 
async function logout(token) {
    // evtl. später Token invalidieren
    //Was ist mit Blacklist-System??
}

module.exports = {
    login,
    register,
    logout
};