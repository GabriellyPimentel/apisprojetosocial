const express = require('express');
const router = express.Router();
const projetosController = require('../controllers/projetosController'); // Importa o controlador que gerencia a lógica dos projetos sociais

router.get('/', projetosController.listarProjetos); // Define a rota GET '/' que, ao ser acessada, executa a função 'listarProjetos' no controlador

module.exports = router;  // Exporta o roteador para ser usado no app principal