const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriasSchema = new Schema({
	nome: {
		type: String,
		trim: true,
		required: true,
	}
});

module.exports = mongoose.model('Categoria', CategoriasSchema)