import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  public formulario: FormGroup;
  public msgError: string;

  constructor(
    private funcionarioService: FuncionarioService,
    public dialogRef: MatDialogRef<CadastroFuncionarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Funcionario) {}

  public ngOnInit() {
    this.msgError = null;
    console.log("ngOnInit CadastroFuncionarioComponent :" + this.data);
    this.novoFormulario();
    if (this.data != null) {
      this.formulario.get('idFuncionario').setValue(this.data.idFuncionario);
      this.formulario.get('nome').setValue(this.data.nome);
      this.formulario.get('cpf').setValue(this.data.cpf);
      this.formulario.get('email').setValue(this.data.email);
      this.formulario.get('senha').setValue(this.data.senha);
      this.formulario.get('status').setValue(this.data.status);
    }
  }

  private novoFormulario(): void {
    this.formulario = new FormGroup({
      idFuncionario: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      cpf: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required)
    });
  }


  // define se uma funcionario será criada ou atualizada
  public saveFuncionario() {
    if (this.formulario.valid) {
      if (this.formulario.get('idFuncionario').value != null) {
        console.log("updateFuncionario CadastroFuncionarioComponent: " + this.formulario.value);
        this.funcionarioService.updateFuncionario(this.formulario.value).subscribe(
          (sucesso) => {
            console.log(sucesso);
            this.dialogRef.close();
          },
          error => {
            this.msgError = error;
            console.log("error updateFuncionario CadastroFuncionarioComponent: " + error);
          });
      } else {
        console.log("saveFuncionario CadastroFuncionarioComponent: " + this.formulario.value);
        this.funcionarioService.saveFuncionario(this.formulario.value).subscribe(
          (sucesso) => {
            console.log(sucesso);
            this.dialogRef.close();
          },
          error => {
            this.msgError = error;
            console.log("error saveFuncionario CadastroFuncionarioComponent: " + error);
          });
      }
    } else {
      this.msgError = "O formulário não está válido!";
    }
  }

  public resetar(): void {
    this.formulario.reset();
    this.msgError = null;
  }

  public verificaValidTouched(campo: any) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }


  public aplicaCssErro(campo: any) {
    return {
      'border-red': this.verificaValidTouched(campo)
    };
  }

}
