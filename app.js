const express = require('express');
const app = express();
const path = require('path');
const principalRoutes = require('./routes/principal.routes');

// Configura o EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Rota raiz redireciona para o login
app.get('/', (req, res) => {
    res.redirect('/login');
});

// Importa as rotas principais
app.use('/', principalRoutes);


// Middleware de erro 404
app.use((req, res) => {
    res.status(404).render('erro', {
        titulo: '404 - Página Não Encontrada'
    });
});

// Middleware de erro 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('erro', {
        titulo: '500 - Erro Interno do Servidor'
    });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});