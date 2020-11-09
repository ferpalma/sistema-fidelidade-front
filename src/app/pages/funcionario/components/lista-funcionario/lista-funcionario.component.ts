import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';
import { NgForm } from '@angular/forms';

import { CadastroFuncionarioComponent } from '../cadastro-funcionario/cadastro-funcionario.component'
import { EditarFuncionarioComponent } from '../editar-funcionario/editar-funcionario.component'

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.scss']
})
export class ListaFuncionarioComponent implements OnInit {

  funcionario = {} as Funcionario;
  listaFuncionario: Funcionario[];

  ngOnInit(): void {
    this.getListaFuncionario();
  }

  constructor(public dialog: MatDialog, private funcionarioService: FuncionarioService) {}



  openDialog() {
    this.dialog.open(CadastroFuncionarioComponent, {
      width: '650px'
    });
  }


  // Chama o serviço para obter todos os funcionarios
  getListaFuncionario() {
    this.funcionarioService.getListaFuncionario().subscribe((listaFuncionario: Funcionario[]) => {
      this.listaFuncionario = listaFuncionario;
    });
  }

  // deleta uma funcionario
  deleteFuncionario(funcionario: Funcionario) {
    this.funcionarioService.deleteFuncionario(funcionario).subscribe(() => {
      this.getListaFuncionario();
    });
  }

  // copia o funcionarioro para ser editado.
  // editFuncionario(funcionario: Funcionario) {
  //   this.funcionario = { ...funcionario };
  //   this.dialog.open(CadastroFuncionarioComponent, {
  //     data:{
  //       nome: this.funcionario.nome
  //     }
  //   });
  // }

  editFuncionario(funcionario: Funcionario): void {
    this.funcionario = { ...funcionario };
    const dialogRef = this.dialog.open(EditarFuncionarioComponent, {
      width: '650px',
      data: {id: this.funcionario.idFuncionario, nome: this.funcionario.nome, status: this.funcionario.status, cpf: this.funcionario.cpf, email: this.funcionario.email}
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaFuncionario();
    form.resetForm();
    this.funcionario = {} as Funcionario;
  }
}
