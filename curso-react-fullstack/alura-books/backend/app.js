const express = require("express");
const rotaLivro = require("./routers/livro")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const port = 9001;

app.get('/', (req, res) => {
    res.send("Você está na rota principal");
});

app.use('/livros', rotaLivro);

app.listen(port, () => {
    console.log(`Acesse em: http://localhost:${port}`);
});