module.exports = function(application){
	application.get('/',function(req,res){
		application.app.controllers.home_controller.home(application,req,res);
	});
}