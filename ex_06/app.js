var express = require('express')
var app = express()
var bodyParser = require('body-parser');
require('express-helpers')(app);
var cookieParser = require('cookie-parser'); 
app.set('view engine', 'ejs');
app.use(cookieParser());

var urlencodedParser = bodyParser.urlencoded({ extended: false }) // POST

app.get('/index', function (req, res) {
    res.render('index');
})

app.get('/show', function(req, res){
    if (req.body === undefined){
        res.redirect(302, "index"); // redirect the user if he tries without enter any data
    }
    res.render('show')
})

app.post('/show', urlencodedParser, function (req, res) {
   if(req.body['name'] === ""){
        res.redirect(302, "index"); // redirect the user if nothing is send
    }
    res.render('show', {data : req.body});
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