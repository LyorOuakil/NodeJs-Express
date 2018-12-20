var express = require('express');
var socket = require('socket.io');
var fs = require('fs');
var app = express();
app.set('view engine', 'ejs');

module.exports.start = server = app.listen(4000, function () {
    app.use(express.static('public'));
    var io = socket(server);
    io.on('connection', function (socket) {
        console.log('New user connected', socket.id);

        socket.on('chat', function(data){
            io.sockets.emit('chat', data);
        })
        socket.on('typing', function(data){
           socket.broadcast.emit('typing', data);
        })
    });
});

app.get('/:file', function (req, res) {
var path = "/Users/Lyor/Desktop/coding-academy/nodeJs_02/ex_09/files/" + req.params.file;

    if(fs.existsSync(path)){
        var files = __dirname + "/files/" + req.params.file;
        res.download(files);
    }else{
        res.status(404);
        res.send("yooo c pas bon");
    }
    })