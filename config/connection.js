
// setup basic MySQL connection and export that connection
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku

  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Create the MySQL connection object
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: mySql_Password,
    database: ""
  });
}
// Export connection for ORM use
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;