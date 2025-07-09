const dadosImpactoHistorico = require('../models/impactoHistorico');

exports.listarImpactos = (req, res) => {
    res.status(200).json({
        mensagem: 'Dados históricos de impacto social por área.',
        historico: dadosImpactoHistorico,
    });
};