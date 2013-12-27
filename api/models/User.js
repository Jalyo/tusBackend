/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

 module.exports = 
 {

 	attributes: 
 	{
 		username: 
 		{
 			type: 'string',
 			required: true,
 			unique: true
 		},
 		password: 
 		{
 			type: 'string',
 			required: true, 
 			minLength: 6
 		},
 		toJSON: function() 
 		{
 			var obj = this.toObject();
 			delete obj.password;
 			return obj;
 		}
 	},

 	beforeCreate: function (attrs, next) {

 		var bcrypt = require('bcrypt-nodejs');

 		bcrypt.genSalt(10, function(err, salt) {
 			if (err) return next(err);
 			bcrypt.hash(attrs.password, null, null, function(err, hash) {
 				if (err) return next(err);
 				attrs.password = hash;
 				next();
 			});
 		});
 	}

 };
