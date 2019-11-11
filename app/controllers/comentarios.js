const model = require('../models/comentarios');

module.exports = {
	criar: async function(req, res, next){
		try{
			await model.create({ comentario:req.body.comentario,filme:req.body.filme }, function (err, result){
				if(err){
					console.log(err)
					next(err);
				}else{
					res.json({status: "success",code:200, message: "ok", data: null});
				}
			});
		}catch(e){
			next(e) 
		}
	},
	comentarios: async function(req, res, next) {
		try{
			await model.find({},'-__v',{sort: {'createdAt': 'desc'}, limit:10}, function(err, categorias){
				if (err){
					next(err);
				}else{
					res.json({status:"success",code:200, message: "ok", data:categorias});
				}
			});
		}catch(e){
			//futuramente criar um middleware para manipular erros
			next(e) 
		}
	},
	comentariosByFilme: async function(req, res, next) {
		try{
			await model.find({'filme._id':req.params.filmeId},'-_id',{sort: {'createdAt': 'asc'}}, function(err, comeFilms){
				if (err){
					next(err);
				}else{
					res.json({status:"success",code:200, message: "ok", data:comeFilms});
				}
			});
		}catch(e){
			//futuramente criar um middleware para manipular erros
			next(e) 
		}
	},
}

