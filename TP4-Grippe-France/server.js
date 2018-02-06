//CRÉER SERVEUR///////////////////////////////////////////
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server);


server.listen(8080);

/////////////////////////////////////////////////////////
//UNION AVEC HTML///////////////////////////////////////
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/france.html');

});
/////////////////////////////////////////////////////////
