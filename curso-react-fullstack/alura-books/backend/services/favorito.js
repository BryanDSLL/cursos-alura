const fs = require("fs");
const path = require("path");

function getTodosFavoritos() {
    const caminhoFavoritos = path.join(__dirname, "../favoritos.json");
    return JSON.parse(fs.readFileSync(caminhoFavoritos))
}

function deletaFavoritoPorId(id) {
    const caminhoFavoritos = path.join(__dirname, "../favoritos.json");
    const favoritos = JSON.parse(fs.readFileSync(caminhoFavoritos))
    const favoritosFiltrados = favoritos.filter(favorito => favorito.id !== id)

    fs.writeFileSync(caminhoFavoritos, JSON.stringify(favoritosFiltrados))
}

function insereFavorito(id) {
    const caminhoLivros = path.join(__dirname, "../livros.json");
    const caminhoFavoritos = path.join(__dirname, "../favoritos.json");
    const livros = JSON.parse(fs.readFileSync(caminhoLivros))
    const favoritos = JSON.parse(fs.readFileSync(caminhoFavoritos))
    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync(caminhoFavoritos, JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    deletaFavoritoPorId
};
