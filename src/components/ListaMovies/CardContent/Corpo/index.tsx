import styled from "styled-components"
import IconLixo from "../../../../assets/img/lixo.png";
import ImageDecrement from "../../../../assets/img/decrement.png";
import ImageIncrement from "../../../../assets/img/increment.png";
import { formatarValor } from "../../../../utils/formatarValor"
import { IProdutoCarrinho } from "../../../../interfaces/IProdutosCarrinho";
import { useIncrementItemCarrinho } from "../../../../state/hooks/useIncrementProdutoCarinho";
import { useDecrementItemCarrinho } from "../../../../state/hooks/useDecrementProdutoCarinho";
import { useListaCarrinho } from "../../../../state/hooks/useListaCarrinho";
import { useRecoilState } from "recoil";
import { qtdNoCarrinhoState } from "../../../../state/atom";

const CorpoBox = styled.main`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: auto auto;
  align-items: baseline;
  position: relative;
  
  @media screen and (min-width: 1080px) {
    grid-template-columns: 28rem repeat(2, 29.9rem) 1fr;
    align-items: center;
  }
`

const Produto = styled.div`
  display: flex;

  @media screen and (min-width: 1080px) {
    gap: 1.6rem;
  }
`

const ProdutoImage = styled.img`
  max-width: 9.1rem;

  @media screen and (max-width: 1080px) {
    float: left;
    margin-right: 1.6rem;
    max-width: 6.4rem;
  }
`

const ProdutoTexos = styled.div`
  display: flex;
  gap: .8rem;

  @media screen and (max-width: 1080px) {
    width: calc(100% - 7.9rem);
    gap: 0.8rem;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 8rem;
  }

  @media screen and (min-width: 1080px) {
    flex-direction: column;
  }
`

const ProdutoTitulo = styled.span`
  color: var(--color-txt);
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  
  @media screen and (max-width: 1080px) {
    flex: 1;
  }
`

const ProdutoPreco = styled(ProdutoTitulo)`
  font-size: 1.6rem;

  @media screen and (max-width: 1080px) {
    flex: none;
    margin-left: auto;
  }
`

const Quantidade = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const IptQtd = styled.input`
  width: 6.2rem;
  height: 2.6rem;
  border-radius: .4rem;
  border: .1rem solid var(--color-border);
  color: var(--color-txt);
  font-size: 1.4rem;
  text-align: center;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
`

const BotaoDec = styled.button`
  background: url(${ImageDecrement});
  background-size: contain;
  border: 0;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`

const BotaoInc = styled(BotaoDec)`
  background: url(${ImageIncrement});
`

const CorpoText = styled(ProdutoPreco)`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const CorpoTextMobile = styled.span`
  @media screen and (max-width: 1080px) {
    color: var(--color-txt-second);
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const BotaoLixeira = styled.button`
  display: none;
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  border: 0;
  margin-left: auto;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 1080px) {
    display: block;
  }
`

const BotaoLixeiraMobile = styled(BotaoLixeira)`
  display: block;

  @media screen and (min-width: 1080px) {
    display: none;
  }
`

const Icon = styled.img`
  width: 1.8rem;
  vertical-align: middle;
`

const Corpo = ({ props }: { props: IProdutoCarrinho }) => {
  const [qtdNoCarrinho, setQtdNoCarrinho] = useRecoilState(qtdNoCarrinhoState);

  const incrementProdutoNoCarrinho = useIncrementItemCarrinho();
  const handleIncrementQtd = (item: IProdutoCarrinho) => {
    setQtdNoCarrinho(qtdNoCarrinho + 1);
    incrementProdutoNoCarrinho(item);
  };

  const decrementarProdutoNoCarrinho = useDecrementItemCarrinho();
  const handleDecrementaQtd = (item: IProdutoCarrinho) => {
    setQtdNoCarrinho(props.quantidade > 1 ? qtdNoCarrinho - 1 : qtdNoCarrinho);
    decrementarProdutoNoCarrinho(item);
  };

  const removerProdutoNoCarrinho = useListaCarrinho().removerProdutoCarinho;
  const handleRemoverDoCarrinho = (item: IProdutoCarrinho) => {
    setQtdNoCarrinho(qtdNoCarrinho - props.quantidade);
    decrementarProdutoNoCarrinho(item);
    removerProdutoNoCarrinho(item);
  };

  return (
    <CorpoBox key={props.id}>
      <Produto>
        <ProdutoImage src={props.image} />
        <ProdutoTexos>
          <ProdutoTitulo>
            {props.title}
          </ProdutoTitulo>
          <ProdutoPreco>
            {formatarValor(props.price)}
          </ProdutoPreco>
          <BotaoLixeiraMobile onClick={() => handleRemoverDoCarrinho(props)}>
            <Icon src={IconLixo} />
          </BotaoLixeiraMobile>
        </ProdutoTexos>
      </Produto>

      <Quantidade>
        <BotaoDec onClick={() => handleDecrementaQtd(props)} />
        <IptQtd type="number" value={props.quantidade} />
        <BotaoInc onClick={() => handleIncrementQtd(props)} />
      </Quantidade>

      <CorpoText>
        <CorpoTextMobile>Subtotal</CorpoTextMobile>
        {formatarValor(props.price * props.quantidade)}
      </CorpoText>

      <BotaoLixeira onClick={() => handleRemoverDoCarrinho(props)}>
        <Icon src={IconLixo} />
      </BotaoLixeira>
    </CorpoBox>
  );
};

export default Corpo;