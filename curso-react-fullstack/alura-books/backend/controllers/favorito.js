const fs = require("fs");
const { getTodosFavoritos, deletaFavoritoPorId, insereFavorito } = require('../services/favorito');

function getFavoritos (req, res) {
    try{
        const favoritos = getTodosFavoritos()
        res.send(favoritos)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
};

function postFavorito (req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201).send("O novo favorito foi criado com sucesso")
        res.status(422).send('O nome passado não é válido')
    } catch(error) {
        res.status(500).send(error.message)
    }
};

function deleteFavorito (req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaFavoritoPorId(id) 
            res.status(201).send(`Favorito ${id} excluído com sucesso`) 
        } else {
            res.status(422).send('O id passado não é válido')
        }
         
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}