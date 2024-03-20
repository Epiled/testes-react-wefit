import styled from "styled-components"
import IconSacola from "../../assets/img/sacola.png";
import { useRecoilState } from "recoil";
import { qtdNoCarrinhoState } from "../../state/atom";
import { useNavigate } from "react-router-dom";
import { dimenssoesImagem } from "../../utils/dimenssoesImagem";

const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 8.8rem;
  padding: 1.6rem 2.4rem;
`

const Logo = styled.h2`
  color: var(--lighter);
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
`

const Carrinho = styled.div`
  display: flex;
  gap: .8rem;
`

const CarrinhoTextos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`

const CarrinhoText = styled.span`
  color: var(--lighter);
  font-size: 1.4rem;
  font-weight: 500;
  display: none;

  @media screen and (min-width: 1080px) {
    display: initial;
  }
`

const CarrinhoQtd = styled(CarrinhoText)`
  color: var(--color-txt-second);
  font-size: 1.2rem;
  display: initial;
`

const BotaoCarrinho = styled.button`
  background-color: transparent;
  height: 4rem;
  width: 4rem;
  border: 0;
  cursor: pointer;
`

const Icone = styled.img`
  width: 2.4rem;
`

const Header = () => {
  const [qtdNoCarrinho] = useRecoilState(qtdNoCarrinhoState);
  const navigator = useNavigate();

  const {width, height} = dimenssoesImagem(IconSacola);

  return (
    <HeaderBox>
      <Logo>WeMovies</Logo>

      <Carrinho>
        <CarrinhoTextos>
          <CarrinhoText>Meu Carrinho</CarrinhoText>
          <CarrinhoQtd>{qtdNoCarrinho} itens</CarrinhoQtd>
        </CarrinhoTextos>

        <BotaoCarrinho aria-label="Navegar para página carrinho de compras" onClick={() => navigator('/carrinho')}>
          <Icone src={IconSacola} width={width} height={height} />
        </BotaoCarrinho>
      </Carrinho>
    </HeaderBox>
  );
}

export default Header;
