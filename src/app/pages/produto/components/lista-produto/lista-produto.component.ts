import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component'

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CadastroProdutoComponent);
  }
  ngOnInit(): void {
  }

}
