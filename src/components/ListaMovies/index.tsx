import styled from "styled-components";
import MovieCard from "../MovieCard";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listaProdutos } from "../../state/atom";
import { useEffect } from "react";

const filmes = [
  {
    "id": 1,
    "title": "Viúva Negra",
    "price": 9.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
  },
  {
    "id": 2,
    "title": "Shang-chi",
    "price": 30.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
  },
  {
    "id": 3,
    "title": "Homem Aranha",
    "price": 29.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
  },
  {
    "id": 5,
    "title": "Morbius",
    "price": 1.5,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png"
  },
  {
    "id": 6,
    "title": "Batman",
    "price": 21.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png"
  },
  {
    "id": 4,
    "title": "Eternos",
    "price": 17.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/eternals.png"
  }
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
  const [listaProdutosAPI] = useRecoilState(listaProdutos);
  const setListaProdutos = useSetRecoilState(listaProdutos);

  useEffect(() => {
    setListaProdutos(filmes)
  }, [setListaProdutos]);


  return (
    <Container>
      {listaProdutosAPI.map(filme => {
        return <MovieCard key={filme.id} {...filme} />
      })}
    </Container>
  )
}

export default ListaMovies;