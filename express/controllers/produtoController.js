var Produto = require('../models/produto');

exports.save = function(nome, descricao, valor, callback) {
	new Produto({
		nome: nome,
		descricao: descricao,
		valor: valor
	}).save(function(error, produto) {
		if (error) {
			callback({
				error: 'nao salvo'
			});
		} else {
			callback(produto);
		}
	});
};

exports.list = function(callback) {
	Produto.find({}, function(error, produtos) {
		if (error) {
			callback({
				error: 'nao encontrado'
			});
		} else {
			callback(produtos);
		}
	});
};

exports.delete = function(id, callback) {
	Produto.findById(id, function(error, produto) {
		if (error) {
			callback({
				error: 'nao encontrado'
			});
		} else {
			produto.remove(function(error) {
				if (!error) {
					callback({
						response: 'removido'
					});
				}
			});
		}
	});
};
