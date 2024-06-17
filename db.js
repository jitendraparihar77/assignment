const mysql = require('mysql2');
const connection = mysql.createConnection({
    connectionLimit: 10, 
    host: 'localhost',
    user: 'root', 
    password: '1234', 
    database: 'university_db'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;
