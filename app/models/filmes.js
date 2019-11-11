const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    _id: {
   		type: Schema.Types.ObjectId, 
   		ref: 'Categoria',
   		required: true,
   	},
	nome: {
		type: String,
		trim: true,
		required: true,
	},
})

const FilmeSchema = new Schema({
	nome: {
		type: String,
		trim: true,
		required: true,
	},
	descricao: {
		type: String,
		trim: true,
		required: true,
	},
	categoria: categoriaSchema
});

module.exports = mongoose.model('Filme', FilmeSchema)