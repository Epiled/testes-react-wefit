import styled from "styled-components"
import Button from "../../Button"
import IconLixo from "../../../assets/img/lixo.png";
import ImageDecrement from "../../../assets/img/decrement.png";
import ImageIncrement from "../../../assets/img/increment.png";
import { useNavigate } from "react-router-dom";
import { listaNoCarrinho, qtdGeral } from "../../../state/atom";
import FeedBack from "../../FeedBack";
import { useRecoilState } from "recoil";
import { FormatarValor } from "../../../state/hooks/useFormateValor";
import { IProdutoCarrinho } from "../../../interfaces/IProdutosCarrinho";
import { useDecrementItemCarrinho } from "../../../state/hooks/useDecrementProdutoCarinho";
import { useIncrementItemCarrinho } from "../../../state/hooks/useIncrementProdutoCarinho";
import { useListaCarrinho } from "../../../state/hooks/useListaCarrinho";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: var(--lighter);
  border-radius: .4rem;
  padding: 2.4rem;
`

const Cabecalho = styled.header`
  display: grid;
  grid-template-columns: 280px repeat(2, 29.9rem) 1fr;

`

const Corpo = styled(Cabecalho).attrs({ as: 'main' })`
  align-items: center;
`

const Rodape = styled(Cabecalho).attrs({ as: 'footer' })`
  grid-template-columns: repeat(4, 1fr);
`

const Topico = styled.span`
  color: var(--color-txt-second);
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Produto = styled.div`
  display: flex;
  gap: 1.6rem;
`

const ProdutoImage = styled.img`
  max-width: 9.1rem;
`

const ProdutoTexos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .8rem;
`

const ProdutoTitulo = styled(Topico)`
  font-size: 1.4rem;
  color: var(--color-txt);`

const ProdutoPreco = styled(ProdutoTitulo)`
  font-size: 1.6rem;
`

const CorpoText = styled(ProdutoPreco)``

const BotaoLixeira = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0;
  background-color: transparent;
  border: 0;
  margin-left: auto;
  cursor: pointer;
`

const Icon = styled.img`
  width: 1.8rem;
  vertical-align: middle;
`

const RodapeInfos = styled.div`
  display: flex;
  align-items: center;
  justify-self: self-end;
  gap: 3.2rem;
  grid-area: 1 / 4 / 2 / 5;
`

const RodapeText = styled(Topico)``
const RodapeTotal = styled(CorpoText)`
  font-size: 2.4rem;
`

const LineBreak = styled.hr`
  background-color: var(--color-txt-second);
  width: 100%;
  height: .1rem;
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
  width: 1.8rem;
  height: 1.8rem;
  background-size: contain;
  border: 0;
  cursor: pointer;
`
const BotaoInc = styled(BotaoDec)`
  background: url(${ImageIncrement});
`

const CardContent = () => {
  const navigate = useNavigate();
  const [qtd, setQtdGeral] = useRecoilState(qtdGeral);
  const [listaNoCarrinhoAtom] = useRecoilState(listaNoCarrinho)

  const valorTotal = listaNoCarrinhoAtom.reduce((acumulador, atual) => {
    return acumulador += atual.price * atual.quantidade
  }, 0)

  const incrementProdutoNoCarrinho = useIncrementItemCarrinho();
  const handleIncrementQtd = (item: IProdutoCarrinho) => {
    incrementProdutoNoCarrinho(item);
  };

  const decrementarProdutoNoCarrinho = useDecrementItemCarrinho();
  const handleDecrementaQtd = (item: IProdutoCarrinho) => {
    decrementarProdutoNoCarrinho(item);
  };

  const removerProdutoNoCarrinho = useListaCarrinho().removerProdutoCarinho;
  const handleRemoverDoCarrinho = (item: IProdutoCarrinho) => {
    removerProdutoNoCarrinho(item); // Adicionando o produto ao carrinho
  };

  console.log(listaNoCarrinhoAtom.length)

  return (
    <>
      {qtd > 0 && listaNoCarrinhoAtom.length > 0 ?

        <Container>
          <Cabecalho>
            <Topico>Produto</Topico>
            <Topico>Qtd</Topico>
            <Topico>Subtotal</Topico>
          </Cabecalho>

          {listaNoCarrinhoAtom.map(item => {
            return (
                <Corpo key={item.id}>
                  <Produto>
                    <ProdutoImage src={item.image} />
                    <ProdutoTexos>
                      <ProdutoTitulo>
                        {item.title}
                      </ProdutoTitulo>
                      <ProdutoPreco>
                        R$ {FormatarValor(item.price)}
                      </ProdutoPreco>
                    </ProdutoTexos>
                  </Produto>

                  <Quantidade>
                    <BotaoDec onClick={() => handleDecrementaQtd(item)} />
                    <IptQtd type="number" value={item.quantidade} />
                    <BotaoInc onClick={() => handleIncrementQtd(item)} />
                  </Quantidade>

                  <CorpoText>
                    R$ {FormatarValor(item.price * item.quantidade)}
                  </CorpoText>

                  <BotaoLixeira onClick={() => handleRemoverDoCarrinho(item)}>
                    <Icon src={IconLixo} />
                  </BotaoLixeira>
                </Corpo>
              )
            })
          }
          < LineBreak />

          <Rodape>
            <Button
              text="Finalizar Pedido"
              icon={false}
              onClick={() => {
                navigate('/compra-realizada');
                setQtdGeral(0);
              }}
            />
            <RodapeInfos>
              <RodapeText>Total</RodapeText>
              <RodapeTotal>R$ {FormatarValor(valorTotal)}</RodapeTotal>
            </RodapeInfos>
          </Rodape>
        </Container>
        :
        <FeedBack tipo={"notFound"} />
      }
    </>
  )
}

export default CardContent;
