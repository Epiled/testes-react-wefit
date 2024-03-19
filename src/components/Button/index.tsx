import styled from "styled-components"
import IconCart from "../../assets/svg/shopping-cart.svg";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { qtdGeral } from "../../state/atom";
interface IBotao {
  text?: string;
  icon?: boolean;
  $transform?: 'uppercase' | 'capitalize' | 'lowercase';
  $maxContainer?: boolean;
  $minHeight?: number;
  $tipo?: string;
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
  font-weight: bold;
  padding: .8rem;
  text-transform: ${props => props.$transform ? props.$transform : 'none'};
  border: 0;
  min-width: 17.3rem;
  min-height: ${props => props.$minHeight ? `${props.$minHeight}rem` : 'auto'};
  ${props => props.$maxContainer ? 'align-self: stretch' : ''};

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
const Contador = ({ quantidade }: { quantidade: number }) => {
  return (
    <QtdBox>
      <Icone src={IconCart} />
      <QtdNumero>{quantidade}</QtdNumero>
    </QtdBox>
  )
}

const Button = ({ text, icon, $transform, $maxContainer, $minHeight, onClick, $tipo}: IBotao) => {
  const [quantidade, setQuantidade] = useState(0);
  const [qtd, setQtdGeral] = useRecoilState(qtdGeral);

  const qtdEstado = quantidade > 0;

  const handleClick = () => {
    
    if (onClick) {
      onClick();
    }
    
    if($tipo === "buy") {
      setQuantidade(quantidade + 1);
      setQtdGeral(qtd + 1);
    }

  };

  return (
    <Botao 
      data-add-cart={qtdEstado} 
      $transform={$transform} 
      $maxContainer={$maxContainer} 
      $minHeight={$minHeight}
      onClick={handleClick}
    >
      {icon && <Contador quantidade={quantidade} />}
      {text && text}
    </Botao>
  )
}


export default Button;