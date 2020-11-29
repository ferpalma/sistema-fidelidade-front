import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-adm-form',
  templateUrl: './login-adm-form.component.html',
  styleUrls: ['./login-adm-form.component.css']
})
export class LoginAdmFormComponent implements OnInit {

  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;


  public ngOnInit(): void {
    this.form = new FormGroup({
      cpf: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
      }

  public loginAdm(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
    }
  }

}
