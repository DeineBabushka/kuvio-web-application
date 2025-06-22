const maria = require('mariadb');

const pool = maria.createPool({
    host: process.env.MARIA_HOST,
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