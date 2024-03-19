import { atom } from "recoil";
import { IProduto } from "../interfaces/IProdutos";
import { IProdutoCarrinho } from "../interfaces/IProdutosCarrinho";

export const qtdGeral = atom<number>({
  key: 'qtdGeral',
  default: 0,
});

export const listaProdutos = atom<IProduto[]>({
  key: 'listaProdutos',
  default: [],
});

export const listaNoCarrinho = atom<IProdutoCarrinho[]>({
  key: 'listaNoCarrinho',
  default: [],
});
