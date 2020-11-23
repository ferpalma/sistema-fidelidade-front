import { Observable } from 'rxjs';
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

  public listaCategorias$: Observable<Categoria[]>;

  ngOnInit(): void {
    this.getListaCategorias();
  }

  constructor(public dialog: MatDialog, 
    private categoriaService: CategoriaService) { }

  // Chama o serviço para obtém todas as categorias
  private getListaCategorias() {
    this.listaCategorias$ = this.categoriaService.getListaCategorias();
  }

  public openDialog() {
    this.dialog.open(CadastroCategoriaComponent, {
      width: '50%'
    });
    this.dialog.afterAllClosed.subscribe(() => { this.getListaCategorias(); });
  }

  // deleta uma categoria
  public deleteCategoria(categoria: Categoria) {
    console.log("deleteCategoria :" + categoria.nome);
    this.categoriaService.deleteCategoria(categoria).subscribe((res) => {
      this.getListaCategorias();
    });
  }

  public editCategoria(categoria: Categoria): void {
    console.log("editCategoria :" + categoria.nome);
    this.dialog.open(CadastroCategoriaComponent, {
      width: '50%',
      data: categoria
    });
    this.dialog.afterAllClosed.subscribe(() => { this.getListaCategorias(); });    
  }
  
}


