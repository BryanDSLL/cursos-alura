const express = require("express");
const cors = require("cors");

const rotaLivros = require("./routers/livro")
const rotaFavoritos = require("./routers/favorito")

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const port = 9001;

app.get('/', (req, res) => {
    res.send("Você está na rota principal");
});

app.use('/livros', rotaLivros);
app.use('/favoritos', rotaFavoritos);

app.listen(port, () => {
    console.log(`Acesse em: http://localhost:${port}`);
});