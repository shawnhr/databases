var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('G_req=======', req.body);
      models.messages.get(function(err, results){
        if (err){console.log(err)}
        res.json(results);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('post request ====>', req.body);
      var messages = [req.body.message, req.body.username, req.body.roomname];
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
        res.json(results);
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

