export const dimenssoesImagem = (imagem: string) => {
  const Imagem = new Image();
  Imagem.src = imagem;
  const width = Imagem.width;
  const height = Imagem.height;

  return {width, height}
}