
 // Vai importar o Express para criar o servidor e iniciar o servidor.
const express = require('express');
const app = express();

// Define a porta do servidor
const port = process.env.PORT || 3000;

// Importação das rotas definidas em arquivos separados

const projetosRoutes = require('./routes/projetosRoutes'); // rotas para os projetos sociais
const impactoHistoricoRoutes = require('./routes/impactoHistoricoRoutes'); // rotas para os historicos de impacto de cada projeto 
const avaliacoesRoutes = require('./routes/avaliacoesRoutes'); // rotas para avaliações de cada projeto

// Define os endpoints da API e vincula cada conjunto de rotas ao seu respectivo caminho.

app.use('/projetos-impacto', projetosRoutes); // Gerencia os projetos sociais
app.use('/dados-impacto-historico', impactoHistoricoRoutes); // retorna o historico do impacto social do projeto
app.use('/avaliacoes-projetos', avaliacoesRoutes); // registra avaliações de cada projeto

// Endpoint principal "/" para exibir uma mensagem quando o servidor estiver rodando

app.get('/', (req, res) => {
    res.send('🚀 API de Impacto Social rodando!');
});

// Inicializa o servidor e faz ele escutar requisições na porta definida
app.listen(port, () => {
  console.log(`🚀 API rodando em http://localhost:${port}`);
});

