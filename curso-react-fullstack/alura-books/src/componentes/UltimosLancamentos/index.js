import { dadosUltimosLancamentos } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import Titulo from '../Titulo/index'
import imgLivro from '../../imagens/livro2.png'
import CardRecomenda from '../CardRecomenda/index'

const UltimosLancamentosContainer = styled.section`
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 65vh;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
`

const LivrosContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const CardsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 20px;
    margin-top: 20px;
`

function UltimosLancamentos() {
    return (

    <UltimosLancamentosContainer>

        <Titulo cor="#000" tamanhoFonte="36px" alinhamento="center">ÚLTIMOS LANÇAMENTOS</Titulo>

        <LivrosContainer>
        {dadosUltimosLancamentos.map( livro => (
            <img src={livro.src} alt={livro.nome} key={livro.id} />
        ))}
        </LivrosContainer>

        <CardsContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 9"
                descricao="Construindo uma aplicação com Angular 11"
                img={imgLivro}
            />
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 10"
                descricao="Construindo uma aplicação com Angular 12"
                img={imgLivro}
            />
        </CardsContainer>


    </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos
