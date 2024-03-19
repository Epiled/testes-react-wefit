import { useRecoilState } from "recoil";
import { listaNoCarrinho } from "../atom";
import { IProdutoCarrinho } from "../../interfaces/IProdutosCarrinho";

// Hook personalizado para adicionar um produto ao carrinho
export const useListaCarrinho = () => {
  const [listaNoCarrinhoAtom, setListaNoCarrinho] =
    useRecoilState(listaNoCarrinho);

  // Função para adicionar um produto ao carrinho
  const adicionarProdutoNoCarrinho = (produto: IProdutoCarrinho) => {
    const existeItem = listaNoCarrinhoAtom.find(
      (item) => item.id === produto.id
    );

    if (existeItem) {
      setListaNoCarrinho(
        listaNoCarrinhoAtom.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setListaNoCarrinho([
        ...listaNoCarrinhoAtom,
        { ...produto, quantidade: 1 },
      ]);
    }
  };

  const removerProdutoCarinho = (produto: IProdutoCarrinho) => {
    const indexItem = listaNoCarrinhoAtom.findIndex(
      (item) => item.id === produto.id
    );

    if(indexItem !== -1) {
      setListaNoCarrinho((listaAtual) => {
        const novaLista = [...listaAtual]; // Cria uma cópia da lista atual
        novaLista.splice(indexItem, 1); // Remove o item na posição indexItem
        return novaLista; // Retorna a nova lista sem o item removido
      });
    }
  };

  // Retorna a função para adicionar o produto ao carrinho
  return {adicionarProdutoNoCarrinho, removerProdutoCarinho};
};
