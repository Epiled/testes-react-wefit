import styled from "styled-components"
import Button from "../Button"
import ImageCapa from "../../assets/img/viuva-negra.png";

interface IMovieCard {
  image: string;
  titulo: string;
  preco: string;
  id: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding: 1.6rem;
  background-color: var(--lighter);
  border-radius: .4rem;
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

const MovieCard = ({image, titulo, preco, id}: IMovieCard) => {
  return (
    <Card>
      <Image src={ImageCapa} />
      <Titulo>{titulo}</Titulo>
      <Preco>R$ {preco}</Preco>
      <Button text="Adicionar ao carrinho" maxContainer icon />
    </Card>
  )
}

export default MovieCard;