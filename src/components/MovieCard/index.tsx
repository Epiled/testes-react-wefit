import styled from "styled-components"
import Button from "../Button"
import { IProduto } from "../../interfaces/IProdutos";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listaNoCarrinho } from "../../state/atom";
import { useState } from "react";
import { useListaCarrinho } from "../../state/hooks/useListaCarrinho";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding: 1.6rem;
  background-color: var(--lighter);
  border-radius: .4rem;
  align-items: center;
`

const Image = styled.img`
  max-width: 14.7rem;
`

const Titulo = styled.h2`
  color: var(--color-txt-alt);
  font-size: 1.2rem;
  font-weight: bold;
`

const Preco = styled(Titulo).attrs({ as: 'span' })`
  color: var(--color-txt);
  font-size: 1.6rem;
`

const MovieCard = ({id, title, price, image}: IProduto) => {

  const adicionarProdutoNoCarrinho = useListaCarrinho().adicionarProdutoNoCarrinho;
  const handleAdicionarAoCarrinho = () => {
    const produto = { id, title, price, image, quantidade: 0 };
    adicionarProdutoNoCarrinho(produto); // Adicionando o produto ao carrinho
  };

  return (
    <Card data-produto-id={id}>
      <Image src={image} />
      <Titulo>{title}</Titulo>
      <Preco>R$ {price.toFixed(2).replace('.', ',')}</Preco>
      <Button 
        text="Adicionar ao carrinho" 
        $maxContainer 
        icon 
        onClick={() => handleAdicionarAoCarrinho()}
        $tipo="buy"
      />
    </Card>
  )
}

export default MovieCard;