const projetosImpacto = require('../models/projeto');

exports.listarProjetos = (req, res) => {
    res.json({
        mensagem: 'Lista de projetos sociais em andamento.',
        projetos: projetosImpacto,
    });
};