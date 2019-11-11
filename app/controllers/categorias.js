const model = require('../models/categorias');

module.exports = {
	criar: async function(req, res, next){
		try{
			await model.create({ nome:req.body.nome }, function (err, result){
				if(err){
					next(err);
				}else{
					res.json({status: "success",code:200, message: "ok", data: null});
				}
			});
		}catch(e){
			next(e) 
		}
	},
	categorias: async function(req, res, next) {
		try{
			await model.find({},'-__v', function(err, categorias){
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
}					