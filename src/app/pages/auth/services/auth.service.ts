import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/fidelidade';

  constructor(private httpClient: HttpClient) {
  }

    // Headers
    httpOptions = {
      headers: new HttpHeaders()
    };

  authenticateFuncionario(email, senha) {
    console.log(email);
    console.log(senha);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( email + ':' + senha) });

    return this.httpClient.get('http://localhost:8080/fidelidade/login/funcionario', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          const authString = 'Basic ' + btoa(email + ':' + senha);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    );
  }
  authenticateCliente(email: string, telefone: string) {
    console.log("authenticateCliente" + email + telefone);
    return this.httpClient.get(this.url + '/login/cliente/' + email + '/' + telefone, this.httpOptions)
    .pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('name');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('email');
  }

}
