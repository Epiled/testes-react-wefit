import styled from "styled-components";

const CabecalhoBox = styled.header`
  display: none;
  
  @media screen and (min-width: 1080px) {
    grid-template-columns: 280px repeat(2, 29.9rem) 1fr;
    display: grid;
  }
`

const Topico = styled.span`
  color: var(--color-txt-second);
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Cabecalho = () => {
  return (
    <CabecalhoBox>
      <Topico>Produto</Topico>
      <Topico>Qtd</Topico>
      <Topico>Subtotal</Topico>
    </CabecalhoBox>
  )
}

export default Cabecalho;