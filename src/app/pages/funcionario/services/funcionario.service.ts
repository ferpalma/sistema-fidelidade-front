import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  url = 'http://localhost:8080/fidelidade'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os funcionarios
  getListaFuncionario(): Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(this.url + '/' + 'funcionarios')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um funcionario pelo id
  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(this.url + '/' + 'funcionario' + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um funcionario
  saveFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.post<Funcionario>(this.url + '/' + 'funcionario' , funcionario, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // atualiza um funcionario
  updateFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(this.url + '/' + 'funcionario' + '/' + funcionario.idFuncionario, funcionario, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um funcionario
  deleteFuncionario(funcionario: Funcionario) {
    return this.httpClient.delete<Funcionario>(this.url + '/' + 'funcionario' + '/' + funcionario.idFuncionario, this.httpOptions)
      .pipe(
        retry(1),
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
