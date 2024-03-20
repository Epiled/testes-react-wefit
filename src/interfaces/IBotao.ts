export interface IBotao {
  text?: string;
  icon?: boolean;
  $transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
  $maxContainer?: boolean;
  $minHeight?: number;
  $minWidth?: number;
  $tipo?: string;
  onClick?: () => void;
}