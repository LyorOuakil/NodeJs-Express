var express = require('express');
var socket = require('socket.io');
var app = express();
app.set('view engine', 'ejs');


module.exports.start = server = app.listen(4000, function () {
    app.use(express.static('public'));
    var io = socket(server);
    io.on('connection', function (socket) {
        console.log('New user connected', socket.id);
    });
});

app.get(['/', '/index'], function (req, res) {
    res.render('index');
})