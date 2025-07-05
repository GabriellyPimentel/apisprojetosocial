const express = require('express');
const router = express.Router();
const impactoHistoricoController = require('../controllers/impactoHistoricoController'); // Importa o controlador que gerencia a lógica dos impactos históricos

// Define a rota GET '/' para listar impactos históricos ao acessar '/dados-impacto-historico'
router.get('/', impactoHistoricoController.listarImpactos);
// Exporta o roteador para ser usado no app principal
module.exports = router;