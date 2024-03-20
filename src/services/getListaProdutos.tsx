export const carregarListaProdutos = async () => {
  try {
    const response = await fetch('http://localhost:5173/db/server.json');
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'Erro desconhecido';
    throw new Error('Erro ao carregar os produtos: ' + errorMessage);
  }
};