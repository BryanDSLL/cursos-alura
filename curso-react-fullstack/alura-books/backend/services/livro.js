const fs = require("fs");
const path = require("path");

function getTodosLivros() {
    const caminhoLivros = path.join(__dirname, "../livros.json");
    return JSON.parse(fs.readFileSync(caminhoLivros))
};

function getLivroPorId(id) {
    const caminhoLivros = path.join(__dirname, "../livros.json");
    const livros = JSON.parse(fs.readFileSync(caminhoLivros))
    const idNumero = Number(id);
    const livroFiltrado = livros.filter(livro => livro.id === idNumero)[0]
    return livroFiltrado
};

function insereLivro(livroNovo) {
    const caminhoLivros = path.join(__dirname, "../livros.json");
    const livros = JSON.parse(fs.readFileSync(caminhoLivros))
    const novaLista = [ ...livros, livroNovo ]
    fs.writeFileSync(caminhoLivros, JSON.stringify(novaLista));
}

function editaLivroPorId(modificacoes, id) {
    const caminhoLivros = path.join(__dirname, "../livros.json");
    let livros = JSON.parse(fs.readFileSync(caminhoLivros))
    const idNumero = Number(id);
    const indiceLivro = livros.findIndex(livro => livro.id === idNumero)
    const livroAlterado = { ...livros[indiceLivro], ...modificacoes }

    livros[indiceLivro] = livroAlterado

    fs.writeFileSync(caminhoLivros, JSON.stringify(livros))
};

function deletaLivroPorId(id) {
    const caminhoLivros = path.join(__dirname, "../livros.json");
    let livros = JSON.parse(fs.readFileSync(caminhoLivros))
    const idNumero = Number(id);
    const indiceLivro = livros.findIndex(livro => livro.id === idNumero)
    livros.splice(indiceLivro, 1);
    fs.writeFileSync(caminhoLivros, JSON.stringify(livros))
};

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    editaLivroPorId,
    deletaLivroPorId
}