function ChatController(application){
	this._app = application;
}

ChatController.prototype.renderChat = function(req,res){
	req.check('nickname','Nickname is required!').notEmpty();
	req.check('nickname','Nickname must be between 3 and 10 characters!').len(3,10);
	var errors = req.validationErrors();
	if(errors){
		res.render('home',{erros:errors});
		return; 
	}else{
		res.render('chat');	
	}
}

module.exports = function(){
	return ChatController;
}