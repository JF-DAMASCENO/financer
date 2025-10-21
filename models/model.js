const express = require('express');

// Dados iniciais
let transacoes = [
    { 
        id: 1, 
        data: '2024-01-15', 
        descricao: 'Salário', 
        categoria: 'Receita', 
        tipo: 'Entrada', 
        valor: 3000.00 
    },
    { 
        id: 2, 
        data: '2024-01-16', 
        descricao: 'Aluguel', 
        categoria: 'Moradia', 
        tipo: 'Saída', 
        valor: 1200.00 
    }
];


// obter transacoes

function getTransacoes() {
    return transacoes
}



// Função para calcular totais
function calcularTotais() {
    const entradas = transacoes
        .filter(t => t.tipo === 'Entrada')
        .reduce((sum, t) => sum + t.valor, 0);
    
    const saidas = transacoes
        .filter(t => t.tipo === 'Saída')
        .reduce((sum, t) => sum + t.valor, 0);
    
    return {
        entradas: entradas.toFixed(2),
        saidas: saidas.toFixed(2),
        saldo: (entradas - saidas).toFixed(2)
    };
}


module.exports = {
   calcularTotais,
   getTransacoes
};