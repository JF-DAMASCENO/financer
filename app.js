const express = require('express');
const app = express();
const path = require('path');
const principalRoutes = require('./routes/principal.route');


// Configura o EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos (ex: CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para ler dados de formulários (opcional, útil em POST)
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
  res.render('index', { title: 'Página Inicial' });
});

// Importa as rotas principais
app.use('/', principalRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});