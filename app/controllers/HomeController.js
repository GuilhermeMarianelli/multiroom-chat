function HomeController(application){
	this._app = application;
}

HomeController.prototype.renderHome = function(req,res){
	var errors = false;
	res.render('home',{erros:errors});
}

module.exports = function(){
	return HomeController;
}