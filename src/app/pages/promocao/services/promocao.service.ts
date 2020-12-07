import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Promocao } from '../models/promocao';
@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  url = 'http://localhost:8080/fidelidade'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // Obtem todos as promocoes
  getListaPromocoes(): Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(this.url + '/' + 'promocoes')
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

    // Obtem todos as promocoes ativos
    getListaPromocoesAtivos(): Observable<Promocao[]> {
      return this.httpClient.get<Promocao[]>(this.url + '/' + 'promocoes/ativos')
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

  // Obtem um promocao pelo id
  getPromocaoById(id: number): Observable<Promocao> {
    return this.httpClient.get<Promocao>(this.url + '/' + 'promocao' + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

    // Obtem um promocao pelo nome
    getPromocaoByNome(nome: string): Observable<Promocao> {
      return this.httpClient.get<Promocao>(this.url + '/' + 'promocao/nome/' + nome)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }

  // salva um promocao
  savePromocao(promocao: Promocao): Observable<Promocao> {
    return this.httpClient.post<Promocao>(this.url + '/' + 'promocao', promocao, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // atualiza um promocao
  updatePromocao(promocao: Promocao): Observable<Promocao> {
    return this.httpClient.put<Promocao>(this.url + '/' +  'promocao',  promocao, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // deleta um promocao
  deletePromocao(promocao: Promocao) {
    return this.httpClient.delete<Promocao>(this.url + '/' +  'promocao' + '/' + promocao.idPromocao, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateImagem(uploadImageData: any): Observable<Promocao> {
    return this.httpClient.post<Promocao>(this.url + '/promocao/upload-imagem', uploadImageData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
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
  }
}
