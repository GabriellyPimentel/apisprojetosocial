const projetosImpacto = require('../models/projeto');

exports.listarProjetos = (req, res) => {
    res.status(200).json({
        mensagem: 'Lista de projetos sociais em andamento.',
        projetos: projetosImpacto,
    });
};