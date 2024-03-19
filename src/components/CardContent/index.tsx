import styled from "styled-components"
import Button from "../Button"
import IconLixo from "../../assets/img/lixo.png";
import ImageCapa from "../../assets/img/viuva-negra.png";
import ImageDecrement from "../../assets/img/decrement.png";
import ImageIncrement from "../../assets/img/increment.png";


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

// <button className={style.modal__dec}>-</button>
// <input className={style.modal__qtd} type="number" name="" id="modalQuantidade" />
// <button className={style.modal__acre}>+</button>

const CardContent = () => {
  return (
    <Container>
      <Cabecalho>
        <Topico>Produto</Topico>
        <Topico>Qtd</Topico>
        <Topico>Subtotal</Topico>
      </Cabecalho>

      <Corpo>
        <Produto>
          <ProdutoImage src={ImageCapa} />
          <ProdutoTexos>
            <ProdutoTitulo>
              Homem Aranha
            </ProdutoTitulo>
            <ProdutoPreco>
              R$ 29,99
            </ProdutoPreco>
          </ProdutoTexos>
        </Produto>
        <Quantidade>
          <BotaoDec />
          <IptQtd type="number" value={1} />
          <BotaoInc />
        </Quantidade>
        <CorpoText>
          R$ 29,99
        </CorpoText>
        <BotaoLixeira>
          <Icon src={IconLixo} />
        </BotaoLixeira>
      </Corpo>

      <LineBreak />

      <Rodape>
        <Button text="Finalizar Pedido" icon={false} />
        <RodapeInfos>
          <RodapeText>Total</RodapeText>
          <RodapeTotal>R$ 29,90</RodapeTotal>
        </RodapeInfos>
      </Rodape>
    </Container>
  )
}

export default CardContent;
