import { useRecoilState } from "recoil";
import { produtosNoCarrinhoState } from "../atom";
import { IProdutoCarrinho } from "../../interfaces/IProdutosCarrinho";

// Hook personalizado para adicionar um produto ao carrinho
export const useDecrementItemCarrinho = () => {
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useRecoilState(produtosNoCarrinhoState);

  // Função para adicionar um produto ao carrinho
  const decrementItemCarrinho = (produto: IProdutoCarrinho) => {
    const existeItem = produtosNoCarrinho.find(item => item.id === produto.id);

    if (existeItem && produto.quantidade > 1) {
      setProdutosNoCarrinho(produtosNoCarrinho.map(item => 
          item.id === produto.id ? {...item, quantidade: item.quantidade - 1} : item
        ));
    }
  };

  // Retorna a função para adicionar o produto ao carrinho
  return decrementItemCarrinho;
};