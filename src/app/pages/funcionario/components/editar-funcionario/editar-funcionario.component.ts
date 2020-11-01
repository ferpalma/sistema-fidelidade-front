import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  listaFuncionario: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, public dialogRef: MatDialogRef<EditarFuncionarioComponent>, @Inject(MAT_DIALOG_DATA) public funcionario: Funcionario) {}
  
  ngOnInit() {
    this.getListaFuncionario();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  // define se uma funcionario será atualizada
  saveFuncionario(form: NgForm) {
    this.funcionarioService.updateFuncionario(this.funcionario).subscribe(() => {
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
