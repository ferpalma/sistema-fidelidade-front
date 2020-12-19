import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(email, telefone) {
    console.log(email);
    console.log(telefone);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( email + ':' + telefone) });
    return this.httpClient.get<User>('http://localhost:8080/fidelidade/login', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          const authString = 'Basic ' + btoa(email + ':' + telefone);
          sessionStorage.setItem('basicauth', authString);
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
  public getUser(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Smith'
    });
  }
}
