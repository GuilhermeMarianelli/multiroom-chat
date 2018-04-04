var app = require('./config/server');

var http = require('http').Server(app);

var io = require('socket.io')(http);

//definir a variável io como sendo global
app.set('io',io);

http.listen(80,function(){
	console.log('Server ON!');
});