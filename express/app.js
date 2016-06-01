var app = require('./config/app_config');
var db = require('./config/db_config');
var Produto = require('./models/produto');
var produtoController = require('./controllers/produtoController');

app.get('/', function(req, res) {
    res.end('API M4W');
});

// List Produtos
app.get('/produtos', function (req, res) {
    produtoController.list(function (resp) {
        res.json(resp);
    });
});

// Cadastra Produtos
app.post('/cadastro', function (req, res) {
    var nome = req.body.nome;
    var descricao = req.body.descricao;
    var valor = req.body.valor;

    produtoController.save(nome, descricao, valor, function (resp) {
        res.json(resp);
    });
});

// Deletar Produto
app.delete('/deletar/:id', function (req, res) {
    var id = req.params.id;

    produtoController.delete(id, function (resp) {
        res.json(resp);
    })
})
