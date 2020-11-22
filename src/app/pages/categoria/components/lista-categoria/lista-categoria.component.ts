import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { NgForm } from '@angular/forms';

import { CadastroCategoriaComponent } from '../cadastro-categoria/cadastro-categoria.component'

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.scss']
})
export class ListaCategoriaComponent implements OnInit {

  public listaCategoria: Categoria[];

  ngOnInit(): void {
    this.getListaCategoria();
  }

  constructor(public dialog: MatDialog, private categoriaService: CategoriaService) { }

  // Chama o serviço para obtém todas as categorias
  private getListaCategoria() {
    this.categoriaService.getListaCategoria().subscribe((listaCategoria: Categoria[]) => {
      this.listaCategoria = listaCategoria;
    });
  }

  public openDialog() {
    this.dialog.open(CadastroCategoriaComponent, {
      width: '450px'
    });
    this.dialog.afterAllClosed.subscribe(() => { this.getListaCategoria(); });
  }

  // deleta uma categoria
  public deleteCategoria(categoria: Categoria) {
    console.log("deleteCategoria :" + categoria.nome);
    this.categoriaService.deleteCategoria(categoria).subscribe((res) => {
      this.getListaCategoria();
    });
  }

  public editCategoria(categoria: Categoria): void {
    console.log("editCategoria :" + categoria.nome);
    this.dialog.open(CadastroCategoriaComponent, {
      width: '450px',
      data: categoria
    });
    this.dialog.afterAllClosed.subscribe(() => { this.getListaCategoria(); });    
  }
}


