const express = require('express');
const app = express();
const port = 3000;

const projetosImpacto = [
  { nome: 'Educação para Todos', objetivo: 'Garantir acesso à educação básica', impacto: '5.000 crianças atendidas' },
  { nome: 'Saúde Comunitária', objetivo: 'Oferecer atendimento médico gratuito', impacto: '2.000 consultas realizadas' },
];

const dadosImpactoHistorico = [
  { ano: 2023, area: 'Educação', impacto: '10.000 estudantes alcançados' },
  { ano: 2024, area: 'Saúde', impacto: '15.000 pessoas atendidas' },
];

const avaliacoesProjetos = [
  { projeto: 'Educação para Todos', avaliacao: 4.8, comentarios: 'Excelente iniciativa.' },
  { projeto: 'Saúde Comunitária', avaliacao: 4.5, comentarios: 'Boa cobertura médica.' },
];

app.get('/projetos-impacto', (req, res) => res.json(projetosImpacto));
app.get('/dados-impacto-historico', (req, res) => res.json(dadosImpactoHistorico));
app.get('/avaliacoes-projetos', (req, res) => res.json(avaliacoesProjetos));

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
