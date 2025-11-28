import styled from 'styled-components'

const CardContainer = styled.div`
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    border-radius: 10px;
    padding: 25px;
    margin: 0;
    max-width: 350px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const CardTitulo = styled.h3`
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 10px 0;
`

const CardSubtitulo = styled.h4`
    color: #FFF;
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 15px 0;
`

const CardDescricao = styled.p`
    color: #FFF;
    font-size: 14px;
    line-height: 1.5;
    margin: 0 0 20px 0;
    max-width: 300px;
`

const CardImagem = styled.img`
    width: 150px;
    height: auto;
    margin: 15px 0;
    border-radius: 8px;
`

const CardBotao = styled.button`
    display: flex;
    background-color: #EB9B00;
    color: #FFF;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #d18800;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    &:active {
        transform: translateY(0);
    }
`

function CardRecomenda ({titulo, subtitulo, descricao, img}) {

    return (
        <CardContainer>
            <CardTitulo>{titulo}</CardTitulo>
            <CardSubtitulo>{subtitulo}</CardSubtitulo>
            <CardDescricao>{descricao}</CardDescricao>
            <CardImagem src={img} alt={subtitulo}/>
            <CardBotao>Saiba mais</CardBotao>
        </CardContainer>
    )
}

export default CardRecomenda;
