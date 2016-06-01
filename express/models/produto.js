var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoSchema = new Schema({
    name: String,
    descricao: String,
    valor: String
});

module.exports = mongoose.model('User', ProdutoSchema);
