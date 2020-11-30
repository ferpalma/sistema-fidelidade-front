import { Categoria } from './../../categoria/models/categoria';

export interface Produto {
  idProduto: number;
  nome: string;
  status: boolean;  
  pontosRecebidos: number;
  pontosRetirada: number;
  urlImage: string;
  categoria: Categoria;
}
