import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }
  url = 'http://localhost:3000/produtos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProduto(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.url)
  }
}
