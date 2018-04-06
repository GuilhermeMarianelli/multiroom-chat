var app = require('./config/server');

var http = require('http').Server(app);

http.listen(80,function(){
	console.log('Server ON!');
});

var io = require('socket.io')(http);

//definir a variável io como sendo global
app.set('io',io);

io.on('connection',function(client){
	console.log('Usuário conectado');
	client.on('disconnect',function(){
		console.log('Usuário desconectado');
	});
	client.on('msgParaServidor',function(obj){
		/* diálogo */
		client.emit('msgParaCliente',{apelido:obj.apelido, msg:obj.msg});
		client.broadcast.emit('msgParaCliente',{apelido:obj.apelido, msg:obj.msg});
		/* participantes */
		client.emit('participantesParaCliente',{apelido:obj.apelido});
		client.broadcast.emit('participantesParaCliente',{apelido:obj.apelido});
	})
});

