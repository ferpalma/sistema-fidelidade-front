import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;

  public ngOnInit(): void {
    this.form = new FormGroup({
          username: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
        });
  }

  public login(): void {
    if (this.form.valid) {
      this.authService.authenticateCliente(this.form.get('username').value, this.form.get('password').value);
    }
  }
}
