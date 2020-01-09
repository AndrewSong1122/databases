var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM messages', (err, messages) => {
        return messages;
      });
    }, // a function which produces all the messages
    post: function (message) {
      var username = message.username;
      var text = message.text;
      var roomname = message.roomname;
      var userId = db.query('SELECT id FROM users WHERE user_name = ' + username);
      var roomId = db.query('SELECT id FROM rooms WHERE room_name = ' + roomname);

      var sql = 'INSERT INTO messages (user_id, room_id, message_text) VALUES (' + userId + ', ' + roomId + ', ' + text + ')';
      db.query(sql, (err) => {
        if (err) {
          throw err;
        }
        console.log(username + ' posted ' + text + ' to ' + roomname);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.query('SELECT * FROM users', (err, users) => {
        return users;
      });
    },
    post: function (username) {
      db.query('INSERT INTO users (user_name) VALUES (' + username + ')', (err) => {
        console.log('Added user: ' + username);
      });
    }
  }
};

