var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT  m.text, m.roomname FROM messages m'
      //var queryString = 'SELECT * FROM messages';
      db.query(queryString, function(err, data) {
          console.log('DATA FROM GET MODEL ===>', data)
          callback(err, data);
      })

    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryString = 'INSERT INTO messages (text, user_id, roomname) VALUE (?,(select id from users where username= ? limit 1),?)';
      db.query(queryString, message, function(err, data){
        callback(err, data);
      })
    } // a function which can be used to insert a message into the database
  },//db.query(quer, message, )  //messages

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, data) {
        callback(err, data);
        })

    }, //get
    post: function (user, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';

      db.query(queryString, user, function(err, data) {
        callback(err, data);
      })

    }
  } //users
}//module export



