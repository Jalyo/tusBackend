/**
 * Story
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

 module.exports = {

 	attributes: 
 	{
 		text: 
 		{
 			type: 'string',
 			required: true
 		},
 		date: 
 		{
 			type: 'integer', 
 			required: true
 		},
 		user:
 		{
 			type: 'integer',
 			required: true
 		},
 		success:
 		{
 			type: 'boolean',
 			required: false
 		}
 	}

 };
