const model = require('../models/model');

const getLogin = (req, res) => {
    try {
        res.render('login', {
            titulo: 'Login - FinancerPro',
            currentPage: '/login'
        });
    } catch (error) {
        console.error('Erro na rota login:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

const postLogin = (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Simulação de autenticação (substitua pela sua lógica real)
        if (email && password) {
            // Login bem-sucedido
            res.redirect('/principal');
        } else {
            // Login falhou
            res.redirect('/login?error=1');
        }
    } catch (error) {
        console.error('Erro no processo de login:', error);
        res.redirect('/login?error=1');
    }
}

const principal = (req, res) => {
    try {

        transacoes = model.getTransacoes()
        const totais = model.calcularTotais();
        
        res.render('index', {
            titulo: 'Controle Financeiro - Dashboard',
            transacoes: transacoes,
            totais: totais,
            currentPage: '/principal'
        });
    } catch (error) {
        console.error('Erro na rota principal:', error);
        res.status(500).send('Erro interno do servidor');
    }
}


const formTransacoes = (req, res) => {
    try {
        res.render('transacoes', {
            titulo: 'Adicionar Transação',
            currentPage: '/transacoes'
        });
    } catch (error) {
        console.error('Erro na rota transacoes:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

const historico = (req, res) => {
    try {
        
        transacoes = model.getTransacoes()
        const totais = model.calcularTotais();
        
        res.render('historico', {
            titulo: 'Histórico de Transações',
            transacoes: transacoes,
            totais: totais,
            currentPage: '/historico'
        });
    } catch (error) {
        console.error('Erro na rota historico:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

module.exports = {
    getLogin,
    postLogin,
    principal,
    formTransacoes,
    historico
};