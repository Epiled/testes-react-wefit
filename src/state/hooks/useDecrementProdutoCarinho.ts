import { useRecoilState } from "recoil";
import { produtosNoCarrinhoState } from "../atom";
import { IProdutoCarrinho } from "../../interfaces/IProdutosCarrinho";

export const useDecrementItemCarrinho = () => {
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useRecoilState(produtosNoCarrinhoState);

  // Função para subtrair um/1 produto do carrinho
  const decrementItemCarrinho = (produto: IProdutoCarrinho) => {
    const existeItem = produtosNoCarrinho.find(item => item.id === produto.id);

    if (existeItem && produto.quantidade > 1) {
      setProdutosNoCarrinho(produtosNoCarrinho.map(item => 
          item.id === produto.id ? {...item, quantidade: item.quantidade - 1} : item
        ));
    }
  };

  // Retorna a função para subtrair o produto do carrinho
  return decrementItemCarrinho;
};