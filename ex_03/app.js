var express = require('express')
var app = express()
app.set('view engine', 'ejs');

app.get('/index', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/image', function(req, res){
    res.sendFile(__dirname + '/image.html');
})

app.get('/form', function(req, res){
    res.sendFile(__dirname + '/form.html');
})

app.get('/student/:x', function(req, res){
    if (isNaN(req.params.x) || req.params.x === undefined){
        res.send("Error 404 : Page not found");        
        return false;
    }
    res.send('Greetings Student Number ' + req.params.x)
})

module.exports = {
    start : function(port){
        app.get('/', function(req, res) {
            res.sendFile(__dirname + '/index.html');
        })
        app.get('', function(req, res) {
            res.sendFile(__dirname + '/index.html');
        })
        app.get('*', function(req, res) {
            res.status(404);
            res.send("Error 404 : Page not found");
          });
        
        app.listen(port);
    }
}