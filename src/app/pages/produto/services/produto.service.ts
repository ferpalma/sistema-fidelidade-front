import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Produto } from '../models/produto';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = 'http://localhost:8080/fidelidade'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // Obtem todos os produtos
  getListaProduto(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url + '/' + 'produtos')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

    // Obtem todos os produtos ativos
    getListaProdutoAtivos(): Observable<Produto[]> {
      return this.httpClient.get<Produto[]>(this.url + '/' + 'produtos/ativos')
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

  // Obtem um produto pelo id
  getProdutoById(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.url + '/' + 'produto' + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // Obtem um produto pelo nome
    getProdutoByNome(nome: string): Observable<Produto> {
      return this.httpClient.get<Produto>(this.url + '/' + 'produto/nome/' + nome)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

  // salva um produto
  saveProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url + '/' + 'produto', produto, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // atualiza um produto
  updateProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.url + '/' +  'produto',  produto, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um produto
  deleteProduto(produto: Produto) {
    return this.httpClient.delete<Produto>(this.url + '/' +  'produto' + '/' + produto.idProduto, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateImagem(uploadImageData: any): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url + '/produto/upload-imagem', uploadImageData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
