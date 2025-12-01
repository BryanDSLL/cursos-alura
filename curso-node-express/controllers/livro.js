const fs = require("fs");
const { getTodosLivros, getLivroPorId, insereLivro, editaLivroPorId, deletaLivroPorId } = require('../services/livro');

function getLivros (req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
};

function getLivro (req, res) {
    try{
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422).send('O id passado não é válido')    
        }

    } catch (error){
        res.status(500).send(error.message)
    }
};

function postLivro (req, res) {
    try {
        const livroNovo = req.body

        if (req.body.nome) {
            insereLivro(livroNovo)
            res.status(201).send("O novo livro foi criado com sucesso")
        } else {
            res.status(422).send('O nome passado não é válido')
        }

    } catch(error) {
        res.status(500).send(error.message)
    }
};

function patchLivro (req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            editaLivroPorId(body, id)
            res.status(201).send("Livro alterado com sucesso")
        } else {
            res.status(422).send('O id passado não é válido')
        }
        
    } catch (error) {
        res.status(500).send(error.message)   
    }
};

function deleteLivro (req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaLivroPorId(id) 
            res.status(201).send(`Livro ${id} excluído com sucesso`) 
        } else {
            res.status(422).send('O id passado não é válido')
        }
         
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};