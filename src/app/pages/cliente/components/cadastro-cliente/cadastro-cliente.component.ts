import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public formulario: FormGroup;
  public msgError: string;

  constructor(
    private clienteService: ClienteService,
    public dialogRef: MatDialogRef<CadastroClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente) { }

  public ngOnInit() {
    this.msgError = null;
    console.log("ngOnInit CadastroClienteComponent :" + this.data);
    this.novoFormulario();
    if (this.data != null) {
      this.formulario.get('idUsuario').setValue(this.data.idUsuario);
      this.formulario.get('nome').setValue(this.data.nome);
      this.formulario.get('cpf').setValue(this.data.cpf);
      this.formulario.get('email').setValue(this.data.email);
      this.formulario.get('telefone').setValue(this.data.telefone);
      this.formulario.get('status').setValue(this.data.status);
    }
  }

  private novoFormulario(): void {
    this.formulario = new FormGroup({
      idUsuario: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      cpf: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telefone: new FormControl(null, Validators.required),
      status: new FormControl(true)
    });
  }

  // define se uma cliente será criada ou atualizada
  public saveCliente() {
    if (this.formulario.valid) {
      if (this.formulario.get('idUsuario').value != null) {
        console.log("updateCliente CadastroClienteComponent: " + this.formulario.value);
        this.clienteService.updateCliente(this.formulario.value).subscribe(
          (sucesso) => {
            console.log(sucesso);
            this.dialogRef.close();
          },
          error => {
            this.msgError = error;
            console.log("error updateCliente CadastroClienteComponent: " + error);
          });
      } else {
        console.log("saveCliente CadastroClienteComponent: " + this.formulario.value);
        this.clienteService.saveCliente(this.formulario.value).subscribe(
          (sucesso) => {
            console.log(sucesso);
            this.dialogRef.close();
          },
          error => {
            this.msgError = error;
            console.log("error saveCliente CadastroClienteComponent: " + error);
          });
      }
    } else {
      this.msgError = "O formulário não está válido!";
    }
  }
  // resetar formulário
  public resetar(): void {
    this.formulario.reset();
    this.msgError = null;
  }

  // valida o campo do formulário
  public verificaValidTouched(campo: any) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  // aplica css de alerta para campo inválido
  public aplicaCssErro(campo: any) {
    return {
      'border-red': this.verificaValidTouched(campo)
    };
  }


}
