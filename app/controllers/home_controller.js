module.exports.home = function(application,req,res){
	var erros = false; 
	res.render('home',{erros:erros});
}
/*
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
*/