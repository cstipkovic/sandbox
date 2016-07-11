var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'express-mysql'
});

connection.connect();

connection.query('select * from `table-name`', function(err, rows, fields) {
    if (!err) {
        console.log('The solution is:', rows);
    } else {
        console.log('Error');
    }
});

connection.end();
