module.exports.chat = function(application,req,res){
	var data = req.body;
	req.check('nickname','O campo deve ser preenchido.').notEmpty();
	req.check('nickname','O campo apelido deve conter entre 3 e 10 caracteres.').len(3,10);
	var erros = req.validationErrors();
	if(erros){
		res.render('home',{erros:erros});
	}else{
		res.render('chat');	
	}
}

/*
function ChatController(application){
	this._app = application;
}

ChatController.prototype.renderChat = function(req,res){
	var data = req.body;
	req.check('nickname','Nickname is required!').notEmpty();
	req.check('nickname','Nickname must be between 3 and 10 characters!').len(3,10);
	var errors = req.validationErrors();
	if(errors){
		res.render('home',{erros:errors}); 
	}else{
		var io = this._app.get('io');
		io.on('connection',function(client){
			console.log('Usuário conectado');
			
			client.on('msgChat',function(msg){
				client.emit('msgChat',msg);
				client.broadcast.emit('msgChat',msg);
			});
	
			client.on('disconnect',function(){
				console.log('Usuário desconectado');
			});
		});
		res.render('chat');	
	}
}

module.exports = function(){
	return ChatController;
}
*/