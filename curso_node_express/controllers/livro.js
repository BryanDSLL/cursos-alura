const fs = require("fs");
const { getTodosLivros, getLivroPorId, insereLivro, editaLivro } = require('../services/livro');

function getLivros (req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send('error.message')
    }
};

function getLivro (req, res) {
    try{
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error){
        res.status(500)
        res.send('error.message')
    }
};

function postLivro (req, res) {
    try {
        const livroNovo = req.body
        res.status(201).send("O novo livro foi criado com sucesso")
        insereLivro(livroNovo)
    } catch(error) {
        res.status(500).send(error.message)
    }
};

function patchLivro (req, res) {
    try {
        const id = req.params.id
        const body = req.body
        editaLivro(body, id)
        res.send("Livro alterado com sucesso")
    } catch (error) {
        res.status(500).send(error.message)   
    }
};

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro
};