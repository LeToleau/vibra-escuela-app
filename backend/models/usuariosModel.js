var md5 = require('md5');
var pool = require('./db');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'SELECT * FROM users WHERE usuario = ? AND password = ? LIMIT 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }