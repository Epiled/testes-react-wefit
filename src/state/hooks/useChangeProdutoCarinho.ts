import { useRecoilState } from "recoil";
import { produtosNoCarrinhoState } from "../atom";
import { IProdutoCarrinho } from "../../interfaces/IProdutosCarrinho";

export const useChangeItemCarrinho = () => {
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useRecoilState(produtosNoCarrinhoState);

  // Função para definir uma quantidade personalizado de produtos no carrinho
  const changeItemCarrinho = (produto: IProdutoCarrinho, qtd: number) => {
    const existeItem = produtosNoCarrinho.find(item => item.id === produto.id);

    if (existeItem && produto.quantidade > 1) {
      setProdutosNoCarrinho(produtosNoCarrinho.map(item => 
          item.id === produto.id ? {...item, quantidade: qtd} : item
        ));
    }
  };

  // Retorna a função de definição de qunatidade personalizada
  return changeItemCarrinho;
};