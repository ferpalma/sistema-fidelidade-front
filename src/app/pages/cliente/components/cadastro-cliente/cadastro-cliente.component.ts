import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {


  cliente = {} as Cliente;
  listaCliente: Cliente[];

  constructor(
    private clienteService: ClienteService, public dialogRef: MatDialogRef<CadastroClienteComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Cliente) {}

  ngOnInit() {
    this.getListaCliente();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // define se uma cliente será criada ou atualizada
  saveCliente(form: NgForm) {
    this.clienteService.saveCliente(this.cliente).subscribe(() => {
      this.cleanForm(form);
    });
  }

  // Chama o serviço para obter todas as clientes
  getListaCliente() {
    this.clienteService.getListaCliente().subscribe((listaCliente: Cliente[]) => {
      this.listaCliente = listaCliente;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaCliente();
    form.resetForm();
    this.cliente = {} as Cliente;
  }

}
