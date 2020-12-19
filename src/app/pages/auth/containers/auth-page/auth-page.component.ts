import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit{

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthService) { }
    ngOnInit() {
    }
  sendLoginForm(){
    (this.loginservice.authenticateCliente(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
                }));
  }
  sendLoginAdmForm(){
    (this.loginservice.authenticateFuncionario(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
                }));
  }
}
