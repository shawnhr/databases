var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT  m.message, u.username, m.roomname FROM messages m INNER JOIN users u ON (u.id = m.user_id)';
      db.query(queryString, function(err, data) {
          callback(err, data);
      })

    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryString = 'INSERT INTO messages (message, roomname, user_id) VALUE (?,?,(select id from users where username= ?))';

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



