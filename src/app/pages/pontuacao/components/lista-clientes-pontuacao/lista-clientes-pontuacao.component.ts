import { Cliente } from './../../../cliente/models/cliente';
import { Component, OnInit } from '@angular/core';
import { CadastroPontuacaoComponent } from '../cadastro-pontuacao/cadastro-pontuacao.component';
import { catchError } from 'rxjs/operators';
import { ClienteService } from '../../../cliente/services/cliente.service';
import {MatDialog} from '@angular/material/dialog';
import { empty, Observable, of } from 'rxjs';
@Component({
  selector: 'app-lista-clientes-pontuacao',
  templateUrl: './lista-clientes-pontuacao.component.html',
  styleUrls: ['./lista-clientes-pontuacao.component.css']
})
export class ListaClientesPontuacaoComponent implements OnInit {

  public listaClientes$: Observable<Cliente[]>;
  public msgError: string;

  ngOnInit(): void {
    this.msgError = null;
    this.getListaClientes();
  }
  constructor(public dialog: MatDialog, private clienteService: ClienteService) {}
    private getListaClientes() {
    this.listaClientes$ = this.clienteService.getListaClientes()
      .pipe(
        catchError(error => {
          this.msgError = error;
          console.log("getListaClientes ListaClientesPontuacaoComponent : " + error);
          // tslint:disable-next-line: deprecation
          return empty();
        })
      );
  }
  public openDialog() {
    this.dialog.open(CadastroPontuacaoComponent, {
      width: '50%'
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.getListaClientes();
    });
  }

}
