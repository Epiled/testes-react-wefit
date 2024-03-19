import styled from "styled-components"
import Button from "../Button"
import ImageCapa from "../../assets/img/viuva-negra.png";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding: 1.6rem;
  background-color: var(--lighter);
  border-radius: .4rem;
  min-width: 32.8rem;
  align-items: center;
`

const Image = styled.img`
  max-width: 14.7rem;
`

const Titulo = styled.h2`
  color: var(--color-txt-alt);
  font-size: 1.2rem;
  font-weight: bold;
`

const Preco = styled(Titulo).attrs({ as: 'span' })`
  color: var(--color-txt);
  font-size: 1.6rem;
`

const MovieCard = () => {
  return (
    <Card>
      <Image src={ImageCapa} />
      <Titulo>Viúva Negra</Titulo>
      <Preco>R$ 9,99</Preco>
      <Button text="Adicionar ao carrinho" icon />
    </Card>
  )
}

export default MovieCard;