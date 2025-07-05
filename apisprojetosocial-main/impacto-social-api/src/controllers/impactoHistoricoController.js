const dadosImpactoHistorico = require('../models/impactoHistorico');

exports.listarImpactos = (req, res) => {
    res.json({
        mensagem: 'Dados históricos de impacto social por área.',
        historico: dadosImpactoHistorico,
    });
};