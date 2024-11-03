const express = require('express');
const { create, update, remove, findAll } = require('./repositories/alunosRepository');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/alunos', (req, res) => { // Método de criação
    const { nome, email, nome_curso } = req.body;
    const aluno = create({ nome, email, nome_curso });
    res.status(201).json(aluno);
});

app.get('/alunos', (req, res) => { // Método de mostragem
    const alunos = findAll();
    res.json(alunos);
});

app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, nome_curso } = req.body;
    const aluno = update(id, { nome, email, nome_curso });
    res.json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    remove(id);
    res.status(283).send();
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
