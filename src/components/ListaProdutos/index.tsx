import styled from "styled-components";
import CardProduto from "./CardProduto";
import { useRecoilState } from "recoil";
import { listaProdutosState } from "../../state/atom";
import { useEffect, useState } from "react";
import FeedBack from "../FeedBack";
import Carregando from "../Carregando";
import { carregarListaProdutos } from "../../services/getListaProdutos";

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

const ListaProdutos = () => {
  const [listaProdutos, setListaProdutos] = useRecoilState(listaProdutosState);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const carregarDadosAPI = async () => {
      try {
        const produtos = await carregarListaProdutos();
        setListaProdutos(produtos);
        setLoading(false);
      } catch (error) {
        setErro(error as string);
      }
    };
    carregarDadosAPI();
  }, [setListaProdutos]);

  return (
    <>
      {loading && <Carregando />}
      {erro && <FeedBack tipo="notFound" />}
      {!loading && !erro && (
        <Container>
          {listaProdutos.map(produto => (
            <CardProduto key={produto.id} {...produto} />
          ))}
        </Container>
      )}
    </>
  );
}

export default ListaProdutos;