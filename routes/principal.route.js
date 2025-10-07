const express = require('express');
const router = express.Router();

// Rota principal
router.get('/', (req, res) => {
  res.render('index', { title: 'Dashboard' });
});


// Rota transacoes
router.get('/transacoes', (req, res) => {
  res.render('transacoes', { title: 'Transações' });
});

// Rota historico
router.get('/historico', (req, res) => {
  res.render('historico', { title: 'Historico' });
});

module.exports = router;
