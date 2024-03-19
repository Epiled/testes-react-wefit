import { IProduto } from "./IProdutos";

export interface IProdutoCarrinho extends IProduto {
  quantidade: number;
}