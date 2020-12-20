import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  invalidLogin = false;
  constructor(
    private authService: AuthService, private router: Router) { }

  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;

  public ngOnInit(): void {
    this.form = new FormGroup({
          username: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
        });
  }

  public login(): void {
    (this.authService.authenticateCliente(this.form.get('username').value, this.form.get('password').value).subscribe(

      data => {
        this.router.navigate(['']);
        this.invalidLogin = true;
      },
      error => {
        this.invalidLogin = false;

      }
    )
    );

  }
}
