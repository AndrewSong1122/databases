var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      var posts = []; // get all posts
      posts = models.messages.get();
      res.send(posts);

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var info = req.json;
      var message = {
        username: info.username,
        text: info.message,
        roomname: info.roomname
      };

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var posts = []; // get all posts
      posts = models.users.get();
      res.send(posts);
    },
    post: function (req, res) {
      var info = req.json;
      var user = {
        username: info.username
      };
  }
};

