import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { NgForm } from '@angular/forms';

import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component'




@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  cliente = {} as Cliente;
  listaCliente: Cliente[];

  ngOnInit(): void {
    this.getListaCliente();
  }

  constructor(public dialog: MatDialog, private clienteService: ClienteService) {}



  openDialog() {
    this.dialog.open(CadastroClienteComponent, {
      width: '650px'
    });
  }


  // Chama o serviço para obter todos os clientes
  getListaCliente() {
    this.clienteService.getListaCliente().subscribe((listaCliente: Cliente[]) => {
      this.listaCliente = listaCliente;
    });
  }

  // deleta uma cliente
  deleteCliente(cliente: Cliente) {
    this.clienteService.deleteCliente(cliente).subscribe(() => {
      this.getListaCliente();
    });
  }

  // copia o clientero para ser editado.
  // editCliente(cliente: Cliente) {
  //   this.cliente = { ...cliente };
  //   this.dialog.open(CadastroClienteComponent, {
  //     data:{
  //       nome: this.cliente.nome
  //     }
  //   });
  // }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaCliente();
    form.resetForm();
    this.cliente = {} as Cliente;
  }
}
