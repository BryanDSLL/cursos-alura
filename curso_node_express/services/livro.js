const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
};

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter( livro => livro.id === id ) [0]
    return livroFiltrado
};

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLista = [ ...livros, livroNovo ]
    fs.writeFileSync("livros.json", JSON.stringify(novaLista));
}

function editaLivro(modificacoes, id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const indiceLivro = livros.findIndex(livro => livro.id === id)
    const livroAlterado = { ...livros[indiceLivro], ...modificacoes }

    livros[indiceLivro] = livroAlterado

    fs.writeFileSync("livros.json", JSON.stringify(livros))
};

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    editaLivro
}