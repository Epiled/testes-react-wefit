import styled from "styled-components";
import Button from "../../../Button";
import { formatarValor } from "../../../../utils/formatarValor";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { produtosNoCarrinhoState, qtdNoCarrinhoState } from "../../../../state/atom";

const RodapeBox = styled.header`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.6rem;

  @media screen and (min-width: 1080px) {
    display: grid;
    gap: 0;
    grid-template-columns: 280px repeat(2, 29.9rem) 1fr;
  }
`
const RodapeInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (min-width: 1080px) {
    gap: 3.2rem;
    align-items: center;
    justify-self: self-end;
    grid-area: 1 / 2 / 2 / 5;
  }
`

const RodapeText = styled.span`
  color: var(--color-txt-second);
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
`

const RodapeTotal = styled(RodapeText)`
  font-size: 2.4rem;
  color: var(--color-txt);
`

const Rodape = () => {
  const navigate = useNavigate();
  const setQtdNoCarrinhoState = useSetRecoilState(qtdNoCarrinhoState);

  const [produtosNoCarrinho, setProdutosNoCarrinho] = useRecoilState(produtosNoCarrinhoState)

  const valorTotal = produtosNoCarrinho.reduce((acumulador, atual) => {
    return acumulador += atual.price * atual.quantidade
  }, 0)

  return (
    <RodapeBox>
      <Button
        text="Finalizar Pedido"
        icon={false}
        $transform={'uppercase'}
        onClick={() => {
          navigate('/compra-realizada');
          setQtdNoCarrinhoState(0);
          setProdutosNoCarrinho([]);
        }}
      />
      <RodapeInfos>
        <RodapeText>Total</RodapeText>
        <RodapeTotal>{formatarValor(valorTotal)}</RodapeTotal>
      </RodapeInfos>
    </RodapeBox>
  )
}

export default Rodape;