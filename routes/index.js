/**
 * Created by atulr on 05/07/15.
 */
var express = require('express');
var router = express.Router();
var io = require('socket.io')(express.Server);

var user = require("../public/javascripts/User");
var listaUsers = [];


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {title: "Login"});
//    console.log("foo");
});

router.post('/', function(req, res, next) {

    var u = new user(req.body.user, 0, getRandomColor(), "0000");
    listaUsers.push(u);
    res.render("joc", {nick: u.nick, color: u.color, posicio: u.posicio});
});


io.on('connection', function (socket) {
    console.log("hola");
  socket.emit('user', {nick: u.nick, color: u.color, posicio: u.posicio});
  socket.on('my other event', function (data) {
    console.log("hola");
  });
})

module.exports = router;
