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

  authenticateFuncionario(email: string, senha: string) {
    console.log("authenticateFuncionario" + email + ' ' + senha);
    return this.httpClient.get(this.url + '/login/funcionario/' + email + '/' + senha, this.httpOptions)
    .pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          return userData;
        }
      )

    );
  }
  authenticateCliente(email: string, telefone: string) {
    console.log("authenticateCliente" + email + ' ' + telefone);
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
