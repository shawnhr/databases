var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        if (err){console.log(err)}
        console.log('RESULTS====>', results);
        res.json({results: results});
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('request.body======>', req.body);
      var messages = [req.body.text, req.body.username, req.body.roomname];
      models.messages.post(messages, function(err, results) {
        if (err){console.error(err)};
        res.sendStatus(201);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        if (err){console.error(err)};
        res.json({results: results});
      });
    },
    post: function (req, res) {
      var users = [req.body.username];
      console.log('user======>', users);
      models.users.post(users, function(err, results) {
        if (err){console.error(err)};
        res.sendStatus(201);
      })
    }
  }
};

