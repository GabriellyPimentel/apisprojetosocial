const avaliacoes = [
    { id: 1, projeto: "Todos pela Educação", nota: 4.5 },
    { id: 2, projeto: "Sistema Único de Saúde", nota: 4.8 },
    { id: 3, projeto: "Amigos do Bem", nota: 4.2 }
];

exports.listarAvaliacoes = (req, res) => {
    res.json({
        mensagem: 'Avaliações dos projetos sociais.',
        avaliacoes: avaliacoes,
    });
};