var express = require('express')
var app = express()

module.exports = {
    start : function(port){
        app.get('/', function(req, res) {
            res.send('Greetings Traveler!');
        })
        app.listen(port);
    }
}