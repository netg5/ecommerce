var userService = require('../services/user');
var requestHandler = require('../../lib/requestHandler');
var _ = require('underscore');

module.exports = {
	authenticate : function(req, res){
		var loginParams = _.pick(req.body, 'username', 'password');
		requestHandler.handle(req, res, userService.authenticate, loginParams);
	},
	signup : function(req, res){
		var signUpParams = _.pick(req.body, 'username', 'password');
		requestHandler.handle(req, res, userService.signup, signUpParams);
	}
};
