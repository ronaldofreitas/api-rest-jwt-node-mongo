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
		required: true,
	},
})

const FilmeSchema = new Schema({
    _id: {
   		type: Schema.Types.ObjectId, 
   		ref: 'Filmes',
   		required: true,
   	},
	nome: {
		type: String,
		required: true,
	},
	descricao: {
		type: String,
		required: true,
	},
	categoria: categoriaSchema
});

const ComentariosSchema = new Schema({
	comentario: {
		type: String,
		trim: true,
		required: true,
	},
	filme: FilmeSchema,
	createdAt: {
		type: Date, 
		default: Date.now
	},
});

module.exports = mongoose.model('Comentarios', ComentariosSchema)