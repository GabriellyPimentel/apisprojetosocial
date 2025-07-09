const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS
app.use(cors({
    origin: ['http://localhost:3002', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Middleware para JSON
app.use(express.json());

// Middleware para logs
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Define a porta do servidor
const port = process.env.PORT || 3001;

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

// Endpoint de teste para verificar se a API está funcionando
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Middleware para tratar erros
app.use((err, req, res, next) => {
    console.error('Erro:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

// Middleware para rotas não encontradas
app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`🚀 API rodando em http://localhost:${port}`);
    console.log(`📊 Endpoints disponíveis:`);
    console.log(`   GET http://localhost:${port}/projetos-impacto`);
    console.log(`   GET http://localhost:${port}/dados-impacto-historico`);
    console.log(`   GET http://localhost:${port}/avaliacoes-projetos`);
});

module.exports = app;