const express = require('express');
const router = express.Router();
const avaliacoesController = require('../controllers/avaliacoesController');

// Define a rota GET '/' para listar avaliações
router.get('/', avaliacoesController.listarAvaliacoes);

module.exports = router;