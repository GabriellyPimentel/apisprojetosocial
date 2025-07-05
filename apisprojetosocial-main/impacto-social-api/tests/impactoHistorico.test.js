const request = require('supertest'); // Importa o Supertest para testar a API simulando requisições HTTP
const express = require('express');
const impactoHistoricoRoutes = require('../src/routes/impactoHistoricoRoutes'); // Importa as rotas que serão testadas

// Conjunto de testes para validar a funcionalidade da rota de impacto histórico
const app = express();
app.use('/dados-impacto-historico', impactoHistoricoRoutes);

describe('Testes para Impacto Histórico', () => {
    
    test('Deve retornar os dados históricos de impacto', async () => {
        const response = await request(app).get('/dados-impacto-historico'); 

        expect(response.status).toBe(200); // Verifica se o status HTTP da resposta é 200 (OK)
        expect(response.body).toHaveProperty('historico'); // Confirma que a resposta contém a propriedade 'historico'
        expect(Array.isArray(response.body.historico)).toBe(true); // Garante que 'historico' é um array
    });

});
