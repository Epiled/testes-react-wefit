import { IProduto } from "../interfaces/IProdutos";

export const carregarListaProdutos = async (): Promise<IProduto[]> => {
  try {
    const response = await fetch('https://wefit-movies.vercel.app/api/movies');
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    const data = await response.json();
    return data.products as IProduto[];
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'Erro desconhecido';
    throw new Error('Erro ao carregar os produtos: ' + errorMessage);
  }
};