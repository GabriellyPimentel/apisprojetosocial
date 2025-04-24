const request = require('supertest'); // Importa as rotas que serão testadas
const express = require('express');
const projetosRoutes = require('../src/routes/projetosRoutes');

// Conjunto de testes para validar a funcionalidade da rota de Projetos 
const app = express();
app.use('/projetos-impacto', projetosRoutes);


describe('Testes para Projetos Sociais', () => {
    
    test('Deve retornar a lista de projetos sociais', async () => {
        const response = await request(app).get('/projetos-impacto');

        expect(response.status).toBe(200); // Verifica se o status da resposta é 200 (OK)
        expect(response.body).toHaveProperty('projetos'); // Confirma que a resposta contém a propriedade 'projetos'
        expect(Array.isArray(response.body.projetos)).toBe(true); // Garante que 'projetos' é um array
    });

});