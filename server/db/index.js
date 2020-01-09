var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var con = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: root,
    password: null
  });
};

var dbConnection = con();

dbConnection.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected!');
});

module.exports = {
  db: dbConnection
};