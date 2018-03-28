module.exports = function(application){
	application.get('/',function(req,res){
		var home_controller = new application.app.controllers.HomeController(application);
		home_controller.renderHome(req,res);
	})
}