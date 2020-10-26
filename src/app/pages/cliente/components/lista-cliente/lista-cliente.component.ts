import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component'


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CadastroClienteComponent);
  }

  ngOnInit(): void {
  }

}
