const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Configurar CORS para produção e desenvolvimento
app.use(cors({
  origin: [
    'http://localhost:3002',
    'http://localhost:3000',
    'https://apisprojetosocial-1u6r.vercel.app' // Frontend publicado
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ✅ Middleware para interpretar JSON
app.use(express.json());

// ✅ Middleware para logs de requisição
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ✅ Definir porta dinâmica (Render usa process.env.PORT)
const port = process.env.PORT || 3001;

// ✅ Importar rotas
const projetosRoutes = require('./routes/projetosRoutes');
const impactoHistoricoRoutes = require('./routes/impactoHistoricoRoutes');
const avaliacoesRoutes = require('./routes/avaliacoesRoutes');

// ✅ Registrar rotas
app.use('/projetos-impacto', projetosRoutes);
app.use('/dados-impacto-historico', impactoHistoricoRoutes);
app.use('/avaliacoes-projetos', avaliacoesRoutes);

// ✅ Endpoint raiz
app.get('/', (req, res) => {
  res.send('🚀 API de Impacto Social rodando!');
});

// ✅ Endpoint de verificação
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ✅ Tratamento de erros internos
app.use((err, req, res, next) => {
  console.error('Erro interno:', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// ✅ Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// ✅ Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 API rodando em http://localhost:${port}`);
  console.log(`📊 Endpoints disponíveis:`);
  console.log(`   GET /projetos-impacto`);
  console.log(`   GET /dados-impacto-historico`);
  console.log(`   GET /avaliacoes-projetos`);
  console.log(`   GET /health`);
});

// Exporta para testes
module.exports = app;
