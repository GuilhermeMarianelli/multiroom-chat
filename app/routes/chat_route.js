module.exports = function(application){
	application.post('/chat',function(req,res){
		application.app.controllers.chat_controller.chat(application,req,res);
	});
	application.get('/chat',function(req,res){
		application.app.controllers.chat_controller.chat(application,req,res);
	});

	/*
	application.post('/chat',function(req,res){
		var ChatController = new application.app.controllers.ChatController(application);
		ChatController.renderChat(req,res);
	});

		application.get('/chat',function(req,res){
		var ChatController = new application.app.controllers.ChatController(application);
		ChatController.renderChat(req,res);
	});
	*/
}