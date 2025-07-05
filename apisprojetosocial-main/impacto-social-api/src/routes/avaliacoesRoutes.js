const express = require('express');
const router = express.Router();
const avaliacoesController = require('../controllers/avaliacoesController');

// Dados simulados de avaliações
const avaliacoes = [
    { id: 1, projeto: "Educação para todos", nota: 4.5 },
    { id: 2, projeto: "Sistema Unico de Saude", nota: 4.8 },
    { id: 3, projeto: "Amigos do Bem", nota: 4.2 }
];

// Rota GET para listar avaliações
router.get('/', (req, res) => {
    res.status(200).json({ avaliacoes });
});


// Define a rota GET '/' para listar avaliações
router.get('/', avaliacoesController.listarAvaliacoes);


module.exports = router;