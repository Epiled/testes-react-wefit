import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil";
import { produtosNoCarrinhoState, qtdNoCarrinhoState } from "../../../state/atom";
import FeedBack from "../../FeedBack";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Corpo from "./Corpo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: var(--lighter);
  border-radius: .4rem;
  padding: 2.4rem;
`

const LineBreak = styled.hr`
  background-color: var(--color-txt-second);
  width: 100%;
  height: .1rem;
`

const CardContent = () => {
  const qtdNoCarrinho = useRecoilValue(qtdNoCarrinhoState);
  const listaNoCarrinho = useRecoilValue(produtosNoCarrinhoState)

  return (
    <>
      {qtdNoCarrinho > 0 && listaNoCarrinho.length > 0 ?

        <Container>
          <Cabecalho />

          {listaNoCarrinho.map(item => {
            return (
              <Corpo key={item.id} props={item} />
            )
          })
          }
          < LineBreak />

          <Rodape />
        </Container>
        :
        <FeedBack tipo={"notFound"} />
      }
    </>
  )
}

export default CardContent;
