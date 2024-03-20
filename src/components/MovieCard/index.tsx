import styled from "styled-components"
import Button from "../Button"
import { IProduto } from "../../interfaces/IProdutos";
import { useListaCarrinho } from "../../state/hooks/useListaCarrinho";
import { formatarValor } from "../../utils/formatarValor";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
  background-color: var(--lighter);
  border-radius: .4rem;
  padding: 1.6rem;
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
      <Preco>{formatarValor(price)}</Preco>
      <Button 
        text="Adicionar ao carrinho"
        $tipo="buy"
        $transform="uppercase"
        $minHeight={4}
        $maxContainer
        icon
        onClick={() => handleAdicionarAoCarrinho()}
      />
    </Card>
  )
}

export default MovieCard;