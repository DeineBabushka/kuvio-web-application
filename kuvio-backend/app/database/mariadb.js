const maria = require('mariadb');

const pool = maria.createPool({
    host: 'localhost',  //testweise von mariadb auf localhost ändern
    user: 'fs_user',
    password: 'fs_pw',
    database: 'fullstack_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = {
    pool
}