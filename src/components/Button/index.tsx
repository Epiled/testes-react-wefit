import styled from "styled-components"
import IconCart from "../../assets/svg/shopping-cart.svg";

interface IBotao {
  text: string;
  icon?: boolean;
  onPress?: () => void;
}

const Botao = styled.button`
  display: flex;
  gap: 1.2rem;
  background-color: var(--color-btn-main);
  border-radius: .4rem;
  color: var(--lighter);
  font-size: 1.2rem;
  padding: .8rem;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: var(--color-btn-main-hover);
  }

  &[data-add-cart="true"] {
    background-color: var(--color-btn-second);

      &:hover {
      background-color: var(--color-btn-second-hover);
    }
  }
`

const Icone = styled.img`
  width: 1.142rem;
  height: 1.19rem;
`

const QtdBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const QtdNumero = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`

const Contador = () => {
  return (
    <QtdBox>
      <Icone src={IconCart} />
      <QtdNumero>0</QtdNumero>
    </QtdBox>
  )
}

const Button = ({ text, icon }: IBotao) => {
  return (
    <Botao data-add-cart='false'>
      {icon && <Contador />}
      {text}
    </Botao>
  )
}

export default Button;