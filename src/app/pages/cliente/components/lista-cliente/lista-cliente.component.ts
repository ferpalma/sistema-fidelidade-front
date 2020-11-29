import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { empty, Observable, of } from 'rxjs';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { catchError } from 'rxjs/operators';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';




@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  public listaClientes$: Observable<Cliente[]>;
  public msgError: string;

  ngOnInit(): void {
    this.msgError = null;
    this.getListaClientes();
  }

  constructor(public dialog: MatDialog, private clienteService: ClienteService) {}


  // Chama o serviço para obtém todas as clientes
  private getListaClientes() {
    this.listaClientes$ = this.clienteService.getListaClientes()
      .pipe(
        catchError(error => {
          this.msgError = error;
          console.log("getListaClientes ListaClienteComponent : " + error);
          // tslint:disable-next-line: deprecation
          return empty();
        })
      );
  }

  public openDialog() {
    this.dialog.open(CadastroClienteComponent, {
      width: '50%'
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.getListaClientes();
    });
  }

  // deleta uma cliente
  public deleteCliente(cliente: Cliente) {
    console.log(cliente);
    this.clienteService.deleteCliente(cliente).subscribe(
      (sucesso) => {
        console.log(sucesso);
        this.getListaClientes();
      },
      error => {
        this.msgError = error;
        console.log("error deleteCliente ListaClienteComponent : " + error);
      });
  }

  public editCliente(cliente: Cliente): void {
    this.dialog.open(CadastroClienteComponent, {
      width: '50%',
      data: cliente
    });
    this.dialog.afterAllClosed.subscribe((sucesso) => {
      console.log(sucesso);
      this.getListaClientes();
    },
      error => {
        this.msgError = error;
        console.log("error editCliente ListaClienteComponent : " + error);
      });
  }

}
