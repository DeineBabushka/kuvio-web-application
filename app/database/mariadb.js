const maria = require('mariadb');
require('dotenv').config();

const pool = maria.createPool({
    host: process.env.MARIA_HOST,  //testweise von mariadb auf localhost ändern
    user: process.env.MARIA_USER,
    password: process.env.MARIA_PASSWORD,
    database: process.env.MARIA_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = {
    pool
}