import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  funcionario = {} as Funcionario;
  listaFuncionario: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, public dialogRef: MatDialogRef<CadastroFuncionarioComponent>, @Inject(MAT_DIALOG_DATA) public data: Funcionario) {}
  
  ngOnInit() {
    this.getListaFuncionario();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // define se uma funcionario será criada ou atualizada
  saveFuncionario(form: NgForm) {
    this.funcionarioService.saveFuncionario(this.funcionario).subscribe(() => {
      this.cleanForm(form);
    });
  }

  // Chama o serviço para obter todas as funcionarios
  getListaFuncionario() {
    this.funcionarioService.getListaFuncionario().subscribe((listaFuncionario: Funcionario[]) => {
      this.listaFuncionario = listaFuncionario;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaFuncionario();
    form.resetForm();
    this.funcionario = {} as Funcionario;
  }

}
