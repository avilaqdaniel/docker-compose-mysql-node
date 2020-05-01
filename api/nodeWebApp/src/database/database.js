const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '042006',
    database: 'final_task',
    multipleStatements: true
});

mysqlConnection.connect(async function (err) {
    if (err) {
        console.log(await err);
        return;
    } else {
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;