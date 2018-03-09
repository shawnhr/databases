var db = require("../db");

module.exports = {
  messages: {
    get: function(callback) {
      var queryString = "SELECT  * FROM messages";
      //var queryString = 'SELECT * FROM messages';
      db.query(queryString, function(err, data) {
        console.log("DATA FROM GET MODEL ===>", data);
        callback(err, data);
      });
    }, // a function which produces all the messages
    post: function(message, callback) {
      var queryString =
        "INSERT INTO messages (text, username, roomname) VALUE (?,? ,?)";
      db.query(queryString, message, function(err, data) {
        callback(err, data);
      });
    } // a function which can be used to insert a message into the database
  }, //db.query(quer, message, )  //messages

  users: {
    // Ditto as above.
    get: function(callback) {
      var queryString = "SELECT username FROM messages";
      db.query(queryString, function(err, data) {
        callback(err, data);
      });
    }, //get
    post: function(user, callback) {
      var queryString = "INSERT INTO messages (username) VALUES (?)";

      db.query(queryString, user, function(err, data) {
        callback(err, data);
      });
    }
  } //users
}; //module export
