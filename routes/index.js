/**
 * Created by atulr on 05/07/15.
 */
var express = require('express');
var router = express.Router();
var io = require('socket.io')(express.Server);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("joc", {name: "ivan"});
//    console.log("foo");
});

router.get('/c9', function(req, res, next) {
  res.render("indexc9", {name: "ivan"});
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
})
module.exports = router;
