import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor( private http: HttpClient ) {}

  salvar(categoria:Categoria ) : Observable<Categoria> {
    return this.http.post<Categoria>( `http://localhost:8080/fidelidade/categoria` ,categoria);
  }

  atualizar(categoria:Categoria ) : Observable<any> {
    return this.http.put<Categoria>(`http://localhost:8080/fidelidade/categoria/${categoria.idCategoria}` ,categoria);
  }

  getClientes() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`http://localhost:8080/fidelidade/categorias`);
  }
  
  getClienteById(id: number) : Observable<Categoria> {
    return this.http.get<any>(`http://localhost:8080/fidelidade/categoria/${id}`);
  }

  deletar(categoria:Categoria) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/fidelidade/categoria/${categoria.idCategoria}`);
  }
}
