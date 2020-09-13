// Set up MySQL connection.
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "sh4ob67ph9l80v61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "twnmfb5oapbyvf69",
    password: "nc3sjm9rqd2gbfb0",
    database: "hatiw45uc42nzf44"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;