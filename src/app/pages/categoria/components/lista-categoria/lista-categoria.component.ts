import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { CadastroCategoriaComponent } from '../cadastro-categoria/cadastro-categoria.component'

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.scss']
})
export class ListaCategoriaComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CadastroCategoriaComponent);
  }
}


