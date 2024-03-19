import styled from "styled-components"
import IconSacola from "../../assets/img/sacola.png";

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

  @media screen and (min-width: 360px) {
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
`

const Icone = styled.img`
  width: 2.4rem;
`



const Header = () => {

  return (
    <HeaderBox>
      <Logo>WeMovies</Logo>

      <Carrinho>
        <CarrinhoTextos>
          <CarrinhoText>Meu Carrinho</CarrinhoText>
          <CarrinhoQtd>0 itens</CarrinhoQtd>
        </CarrinhoTextos>

        <BotaoCarrinho>
          <Icone src={IconSacola} />
        </BotaoCarrinho>
      </Carrinho>
    </HeaderBox>
  );
}

export default Header;
