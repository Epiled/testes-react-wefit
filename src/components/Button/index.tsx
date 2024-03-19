import styled from "styled-components"
import IconCart from "../../assets/svg/shopping-cart.svg";
interface IBotao {
  text?: string;
  icon?: boolean;
  $transform?: 'uppercase' | 'capitalize' | 'lowercase';
  maxContainer?: boolean;
  $minHeight?: number;
  onClick?: () => void;
}

const Botao = styled.button<IBotao>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  background-color: var(--color-btn-main);
  border-radius: .4rem;
  color: var(--lighter);
  font-size: 1.2rem;
  padding: .8rem;
  font-weight: bold;
  text-transform: ${props => props.transform ? props.transform : 'none'};
  border: 0;
  min-width: 17.3rem;
  min-height: ${props => props.$minHeight ? `${props.$minHeight}rem` : 'auto'};
  ${props => props.maxContainer ? 'align-self: stretch' : ''};



  &:hover {
    background-color: var(--color-btn-main-hover);
    cursor: pointer;
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

const Button = ({ text, icon, $transform, maxContainer, $minHeight, onClick }: IBotao) => {
  console.log(maxContainer)
  return (
    <Botao data-add-cart='false' $transform={$transform} maxContainer={maxContainer} $minHeight={$minHeight} onClick={onClick}>
      {icon && <Contador />}
      {text && text}
    </Botao>
  )
}

export default Button;