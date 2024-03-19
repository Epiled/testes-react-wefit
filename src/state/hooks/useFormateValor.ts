export const FormatarValor = (valor: number) => {
  return valor.toFixed(2).replace('.', ',');
}