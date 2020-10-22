var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "intern"
})

con.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = con;