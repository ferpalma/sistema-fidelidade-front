import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  url = 'http://localhost:8080/fidelidade'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Obtem todos os clientes
  getListaClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.url + '/' + 'clientes')
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Obtem um cliente pelo id
  getClienteById(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.url + '/' + 'cliente' + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // salva um cliente
  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.url + '/' + 'cliente' , cliente)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // atualiza um cliente
  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.url + '/' + 'cliente', cliente, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // deleta um cliente
  deleteCliente(cliente: Cliente) {
    console.log(this.url + '/' + 'cliente' + '/' + cliente.idUsuario);
    return this.httpClient.delete<Cliente>(this.url + '/' + 'cliente' + '/' + cliente.idUsuario, this.httpOptions)
      .pipe(
        retry(1),
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
