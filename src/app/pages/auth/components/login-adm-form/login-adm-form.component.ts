import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/consts/routes';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login-adm-form',
  templateUrl: './login-adm-form.component.html',
  styleUrls: ['./login-adm-form.component.css']
})
export class LoginAdmFormComponent implements OnInit {

  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  invalidLogin = false;
  public routers: typeof routes = routes;
  constructor(
    private authService: AuthService, private router: Router) { }
  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
      }

  public loginAdm(): void {
    (this.authService.authenticateFuncionario(this.form.get('username').value, this.form.get('password').value).subscribe(

      data => {
        this.router.navigate([this.routers.HOMEFUNCIONARIO]).then();
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;

      }
    )
    );

  }

}
