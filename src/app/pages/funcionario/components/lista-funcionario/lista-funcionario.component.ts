import { Funcionario } from './../../models/funcionario';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { empty, Observable, of } from 'rxjs';

import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { CadastroFuncionarioComponent } from '../cadastro-funcionario/cadastro-funcionario.component'
// import { EditarFuncionarioComponent } from '../editar-funcionario/editar-funcionario.component'

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.scss']
})
export class ListaFuncionarioComponent implements OnInit {

  public listaFuncionarios$: Observable<Funcionario[]>;
  public msgError: string;
  public form: FormGroup;
  
  constructor(public dialog: MatDialog, private funcionarioService: FuncionarioService) {}
  
  ngOnInit(): void {
    this.msgError = null;
    this.getListaFuncionario();
    // this.pesquisa();
    this.form = new FormGroup({
      nome: new FormControl(null)
    });
    
  }

  private formulario(): void {
    this.form = new FormGroup({
      idUsuario: new FormControl(null),
      nome: new FormControl(null, Validators.required),
    });
  }

  public pesquisa(funcionario: Funcionario): void {
    this.funcionarioService.getFuncionarioByNome(funcionario.nome).subscribe(
      (sucesso) => {
        console.log(sucesso);
        this.getListaFuncionario();
      },
      error => {
        this.msgError = error;
        console.log("error deleteFuncionario ListaFuncionarioComponent : " + error);
      });
  }
  

  public openDialog() {
    this.dialog.open(CadastroFuncionarioComponent, {
      width: '50%'
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.getListaFuncionario();
    });
  }

  // Chama o serviço para obtém todos os funcionarios
  private getListaFuncionario() {
    this.listaFuncionarios$ = this.funcionarioService.getListaFuncionario()
      .pipe(
        catchError(error => {
          this.msgError = error;
          console.log("getListaFuncionario ListaFuncionarioComponent : " + error);
          return empty();
        })
      );
  }


  // deleta uma categoria
  public deleteFuncionario(funcionario: Funcionario) {
    this.funcionarioService.deleteFuncionario(funcionario).subscribe(
      (sucesso) => {
        console.log(sucesso);
        this.getListaFuncionario();
      },
      error => {
        this.msgError = error;
        console.log("error deleteFuncionario ListaFuncionarioComponent : " + error);
      });
  }

  public editFuncionario(funcionario: Funcionario): void {
    this.dialog.open(CadastroFuncionarioComponent, {
      width: '50%',
      data: funcionario
    });
    this.dialog.afterAllClosed.subscribe((sucesso) => {
      console.log(sucesso);
      this.getListaFuncionario();
    },
      error => {
        this.msgError = error;
        console.log("error editFuncionario ListaFuncionarioComponent : " + error);
      });
  }
}
