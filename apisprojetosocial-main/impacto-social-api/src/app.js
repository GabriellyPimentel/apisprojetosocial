const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Middleware para JSON
app.use(express.json());

// Define a porta do servidor
const port = process.env.PORT || 3000;

// Importação das rotas
const projetosRoutes = require('./routes/projetosRoutes');
const impactoHistoricoRoutes = require('./routes/impactoHistoricoRoutes');
const avaliacoesRoutes = require('./routes/avaliacoesRoutes');

// Define os endpoints da API
app.use('/projetos-impacto', projetosRoutes);
app.use('/dados-impacto-historico', impactoHistoricoRoutes);
app.use('/avaliacoes-projetos', avaliacoesRoutes);

// Endpoint principal
app.get('/', (req, res) => {
    res.send('🚀 API de Impacto Social rodando!');
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`🚀 API rodando em http://localhost:${port}`);
});

module.exports = app; // Para testes