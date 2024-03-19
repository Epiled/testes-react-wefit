export interface IProduto {
  id: number,
  title: string,
  price: number,
  image: string,
  onClick?: () => void,
}