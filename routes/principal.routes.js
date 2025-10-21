const express = require('express');
const Controller = require('../controllers/Controller.js');
const router = express.Router();


// Rotas de Login
// ==================================================

router.get('/login', Controller.getLogin);
router.post('/login', Controller.postLogin);


// Dashboard
// ==================================================

router.get('/principal', Controller.principal);


// Transacoes
// ==================================================

router.get('/transacoes', Controller.formTransacoes);


// Historico
// ==================================================

router.get('/historico', Controller.historico);

module.exports = router;