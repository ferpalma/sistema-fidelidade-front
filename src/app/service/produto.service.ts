import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor( private https: HttpClient ) {}

  salvar(produto:Produto ) : Observable<Produto> {
    return this.https.post<Produto>( `https://localhost:8080/fidelidade/produto` ,produto);
  }

  atualizar(produto:Produto ) : Observable<any> {
    return this.https.put<Produto>(`https://localhost:8080/fidelidade/produto/${produto.idProduto}` ,produto);
  }

  getClientes() : Observable<Produto[]> {
    return this.https.get<Produto[]>(`https://localhost:8080/fidelidade/produtos`);
  }
  
  getClienteById(id: number) : Observable<Produto> {
    return this.https.get<any>(`https://localhost:8080/fidelidade/produto/${id}`);
  }

  deletar(produto:Produto) : Observable<any> {
    return this.https.delete<any>(`https://localhost:8080/fidelidade/produto/${produto.idProduto}`);
  }
}
