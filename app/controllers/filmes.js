const model = require('../models/filmes');
//const asyncMiddleware = require('../../utils/asyncMiddleware');

module.exports = {
	getFilmes: async function(req, res, next) {
		try{
			await model.find({},'-__v', function(err, filmes){
				if(err){
					next(err);
				}else{
					res.json({status:"success",code:200, message: "ok", data:filmes});
				}
			});
		}catch(e){
			//futuramente criar um middleware para manipular erros
			next(e) 
		}
	},
	getById: async function(req, res, next) {
		try{
			await model.findById(req.params.filmeId, function(err, filmeInfo){
				if (err) {
					next(err);
				} else {
					res.json({status:"success", code:200,message: "ok", data:filmeInfo});
				}
			});
		}catch(e){
			next(e) 
		}
	},
	updateById: async function(req, res, next) {
		try{
			await model.findByIdAndUpdate(req.params.filmeId,{ nome:req.body.nome, descricao:req.body.descricao, categoria:req.body.categoria }, function(err, movieInfo){
				if(err)
					next(err);
				else {
					res.json({status:"success", code:200,message: "ok", data:null});
				}
			});
		}catch(e){
			next(e) 
		}
	},
	deleteById: async function(req, res, next) {
		try{
			await model.findByIdAndRemove(req.params.filmeId, function(err, movieInfo){
				if(err)
					next(err);
				else {
					res.json({status:"success", code:200, message: "ok", data:null});
				}
			});
		}catch(e){
			next(e) 
		}
	},
	criar: async function(req, res, next) {
		try{
			await model.create({ nome:req.body.nome, descricao:req.body.descricao, categoria:req.body.categoria }, function (err, result) {
			  if (err){
			  	next(err);
			  }else{
			  	res.json({status: "success",code:200, message: "ok", data: null});
			  }
			});
		}catch(e){
			next(e) 
		}
	}
}					