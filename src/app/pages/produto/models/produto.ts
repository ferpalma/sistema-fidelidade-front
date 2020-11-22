import { Categoria } from './../../categoria/models/categoria';

export interface Produto {
  idProduto: number;
  nome: string;
  status: boolean;
  categoria: Categoria;
  pontosRecebidos: number;
  pontosRetirada: number;
  imagem: any;
  type: string;
}
