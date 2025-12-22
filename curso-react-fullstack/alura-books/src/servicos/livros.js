import axios from "axios";

const livrosAPI = axios.create({
    baseURL: "http://localhost:9001/livros"
})


async function getLivros() {
    const response = await livrosAPI.get('/');

    return response.data;
}

export {
    getLivros
}