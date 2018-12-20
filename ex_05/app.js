var express = require('express')
var app = express()
var cookieParser = require('cookie-parser'); 
app.set('view engine', 'ejs');
app.use(cookieParser());

app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    res.cookie('myFirstCooki', 'looks goods');
})

app.get('/image', function (req, res) {
    res.sendFile(__dirname + '/image.html');
})

app.get('/form', function (req, res) {
    res.sendFile(__dirname + '/form.html');
})

app.get('/student/:x', function (req, res) {
    if (isNaN(req.params.x) || req.params.x === undefined) {
        res.send("Error 404 : Page not found");
        return false;
    }
    res.cookie('number', req.params.x);
    res.cookie('name', req.query.name);
    res.render('student', {x : req.params.x, name : req.query.name}) // Send data to views ejs
})

app.get('/memory', function(req, res){
    res.send("Student number " + req.cookies['number']  + " was here" )
    // console.log("Cookie name : ",req.signedCookies);
})

module.exports = {
    start: function (port) {
        app.get('/', function (req, res) {
            res.sendFile(__dirname + '/index.html');
        })
        app.get('', function (req, res) {
            res.sendFile(__dirname + '/index.html');
        })
        app.get('*', function (req, res) {
            res.status(404);
            res.send("Error 404 : Page not found");
        });
        app.listen(port);
    }
}