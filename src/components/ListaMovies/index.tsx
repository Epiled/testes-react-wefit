import styled from "styled-components";
import MovieCard from "../MovieCard";

const Filmes = [
  {
    image: "caminho/para/imagem1.jpg",
    titulo: "Produto 1",
    preco: "R$ 10,00",
    id: "1",
  },
  {
    image: "caminho/para/imagem2.jpg",
    titulo: "Produto 2",
    preco: "R$ 20,00",
    id: "2",
  },
  {
    image: "caminho/para/imagem3.jpg",
    titulo: "Produto 3",
    preco: "R$ 30,00",
    id: "3",
  },
  {
    image: "caminho/para/imagem4.jpg",
    titulo: "Produto 4",
    preco: "R$ 40,00",
    id: "4",
  },
  {
    image: "caminho/para/imagem5.jpg",
    titulo: "Produto 5",
    preco: "R$ 50,00",
    id: "5",
  },
  {
    image: "caminho/para/imagem6.jpg",
    titulo: "Produto 6",
    preco: "R$ 60,00",
    id: "6",
  },
]

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 31.2rem);
  justify-content: center;
  gap: 1.6rem;

  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(auto-fill, 33.8rem);
    row-gap: 2.4rem;
    column-gap: 1.6rem;
  }
`

const ListaMovies = () => {
  return (
    <Container>
      {Filmes.map(filme => {
        return <MovieCard key={filme.id} {...filme} />
      })}
    </Container>
  )
}

export default ListaMovies;