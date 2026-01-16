import { useState } from 'react'
import Input from '../Input'
import styled from 'styled-components'
import { getLivros } from '../../servicos/livros'
import { useEffect } from 'react'
import { postFavorito } from '../../servicos/favoritos'


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        min-height: 270px;
        width: 100%;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        cursor: pointer;
        text-align: center;
        padding: 0 100px;
        p {
                width: 200px;
                color: #FFF;
        }
        img {
                width: 100px;
        }
        &:hover {
                border: 1px solid white;
        }
`

function Pesquisa() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => { fetchLivros() }, []);

    async function fetchLivros() {
        const LivrosAPI = await getLivros()
        setLivros(LivrosAPI)
    }

    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`Livro de id:${id} inserido!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const textoDigitado = event.target.value
                    const resultadoPesquisa = livros.filter(livros => livros.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            {livrosPesquisados.map(livros => (
                <Resultado key={livros.id} onClick={() => insertFavorito(livros.id)}>
                    <p>{livros.nome}</p>
                    <img src={livros.src} />
                </Resultado>
            ))}

        </PesquisaContainer>
    )
}

export default Pesquisa
