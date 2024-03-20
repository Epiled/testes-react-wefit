import { useRecoilState } from "recoil";
import { produtosNoCarrinhoState } from "../atom";
import { IProdutoCarrinho } from "../../interfaces/IProdutosCarrinho";

// Hook personalizado para adicionar um produto ao carrinho
export const useListaCarrinho = () => {
  const [produtosNoCarrinho, setProdutosNoCarrinho] =
    useRecoilState(produtosNoCarrinhoState);

  // Função para adicionar um produto ao carrinho
  const adicionarProdutoNoCarrinho = (produto: IProdutoCarrinho) => {
    const existeItem = produtosNoCarrinho.find(
      (item) => item.id === produto.id
    );

    if (existeItem) {
      setProdutosNoCarrinho(
        produtosNoCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setProdutosNoCarrinho([
        ...produtosNoCarrinho,
        { ...produto, quantidade: 1 },
      ]);
    }
  };

  const removerProdutoCarinho = (produto: IProdutoCarrinho) => {
    const indexItem = produtosNoCarrinho.findIndex(
      (item) => item.id === produto.id
    );

    if(indexItem !== -1) {
      setProdutosNoCarrinho((listaAtual) => {
        const novaLista = [...listaAtual]; // Cria uma cópia da lista atual
        novaLista.splice(indexItem, 1); // Remove o item na posição indexItem
        return novaLista; // Retorna a nova lista sem o item removido
      });
    }
  };

  // Retorna a função para adicionar o produto ao carrinho
  return {adicionarProdutoNoCarrinho, removerProdutoCarinho};
};
