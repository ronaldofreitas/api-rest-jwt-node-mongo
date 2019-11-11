const model = require('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
	autenticar: async function(req, res, next) {
		try{
			await model.findOne({email:req.body.email}, function(err, userInfo){
				if(err){
					next(err);
				}else{
					if(userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)){
						const token = jwt.sign({id: userInfo._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION_TIME }); 
						res.json({status:"success", code: 200, message: "user found", data:{user: userInfo.name, token:token}});	
					}else{
						res.json({status:"error", code: 401, message: "invalid credentials", data:null});
					}
				}
			});
		}catch(e){
			next(e) 
		}
	},
	criar: async function(req, res, next) {
		try{
			await model.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
				if (err){
					next(err);
				}else{
					res.json({status: "success", code: 200, message: "user added", data: null});
				}
			});
		}catch(e){
			next(e) 
		}
	}
}
