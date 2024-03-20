import { atom } from "recoil";
import { IProduto } from "../interfaces/IProdutos";
import { IProdutoCarrinho } from "../interfaces/IProdutosCarrinho";

export const qtdNoCarrinhoState = atom<number>({
  key: 'qtdNoCarrinhoState',
  default: 0,
});

export const listaProdutosState = atom<IProduto[]>({
  key: 'listaProdutosState',
  default: [],
});

export const produtosNoCarrinhoState = atom<IProdutoCarrinho[]>({
  key: 'produtosNoCarrinhoState',
  default: [],
});
