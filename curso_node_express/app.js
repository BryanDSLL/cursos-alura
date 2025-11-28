const express = require("express");
const rotaLivro = require("./routers/livro")
const app = express();

app.use(express.json());

const port = 8000;

app.get('/', (req, res) => {
    res.send("Você está na rota principal");
});

app.use('/livros', rotaLivro);

app.listen(port, () => {
    console.log(`Acesse em: http://localhost:${port}`);
});