import { useRecoilState } from "recoil";
import { listaNoCarrinho } from "../atom";
import { IProdutoCarrinho } from "../../interfaces/IProdutosCarrinho";

// Hook personalizado para adicionar um produto ao carrinho
export const useDecrementItemCarrinho = () => {
  const [listaNoCarrinhoAtom, setListaNoCarrinho] = useRecoilState(listaNoCarrinho);

  // Função para adicionar um produto ao carrinho
  const decrementItemCarrinho = (produto: IProdutoCarrinho) => {
    const existeItem = listaNoCarrinhoAtom.find(item => item.id === produto.id);

    if (existeItem && produto.quantidade > 1) {
      setListaNoCarrinho(listaNoCarrinhoAtom.map(item => 
          item.id === produto.id ? {...item, quantidade: item.quantidade - 1} : item
        ));
    }
  };

  // Retorna a função para adicionar o produto ao carrinho
  return decrementItemCarrinho;
};