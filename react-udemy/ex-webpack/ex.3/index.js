const produto = {
	nome: 'Caneta',
	preco: 1.90,
	desconto: 0.05
};

function clone(objeto) {
	return {...objeto};
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Preta';

console.log(produto, novoProduto);
