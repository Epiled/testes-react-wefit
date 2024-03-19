import { useRecoilState } from "recoil";
import { listaNoCarrinho } from "../atom";
import { IProdutoCarrinho } from "../../interfaces/IProdutosCarrinho";

// Hook personalizado para adicionar um produto ao carrinho
export const useIncrementItemCarrinho= () => {
  const [listaNoCarrinhoAtom, setListaNoCarrinho] = useRecoilState(listaNoCarrinho);

  // Função para adicionar um produto ao carrinho
  const incrementItemCarrinho = (produto: IProdutoCarrinho) => {
    const existeItem = listaNoCarrinhoAtom.find(item => item.id === produto.id);

    if (existeItem) {
      setListaNoCarrinho(listaNoCarrinhoAtom.map(item => 
          item.id === produto.id ? {...item, quantidade: item.quantidade + 1} : item
        ));
    } else {
      setListaNoCarrinho([...listaNoCarrinhoAtom, {...produto, quantidade: 1}]);
    }

  };

  // Retorna a função para adicionar o produto ao carrinho
  return incrementItemCarrinho;
};