import styled from "styled-components";

const Titulo = styled.div `
    font-size: ${props => props.tamanhoFonte || '24px'};
    font-weight: 700;
    color: ${props => props.cor || '#000'};
    width: 100%;
    margin-bottom: 40px;
    text-align: ${props => props.alinhamento || 'center'};
`

export default Titulo