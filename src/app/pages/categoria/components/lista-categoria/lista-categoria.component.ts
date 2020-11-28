import { catchError } from 'rxjs/operators';
import { empty, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { NgForm } from '@angular/forms';

import { CadastroCategoriaComponent } from '../cadastro-categoria/cadastro-categoria.component'

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  public listaCategorias$: Observable<Categoria[]>;
  public msgError: string;

  ngOnInit(): void {
    this.msgError = null;
    this.getListaCategorias();
  }

  constructor(public dialog: MatDialog,
    private categoriaService: CategoriaService) { }

  // Chama o serviço para obtém todas as categorias
  private getListaCategorias() {
    this.listaCategorias$ = this.categoriaService.getListaCategorias()
      .pipe(
        catchError(error => {
          this.msgError = error;
          console.log("getListaCategorias ListaCategoriaComponent : " + error);
          return empty();
        })
      );
  }

  public openDialog() {
    this.dialog.open(CadastroCategoriaComponent, {
      width: '50%'
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.getListaCategorias();
    });
  }

  // deleta uma categoria
  public deleteCategoria(categoria: Categoria) {
    this.categoriaService.deleteCategoria(categoria).subscribe(
      (sucesso) => {
        console.log(sucesso);
        this.getListaCategorias();
      },
      error => {
        this.msgError = error;
        console.log("error deleteCategoria ListaCategoriaComponent : " + error);
      });
  }

  public editCategoria(categoria: Categoria): void {
    this.dialog.open(CadastroCategoriaComponent, {
      width: '50%',
      data: categoria
    });
    this.dialog.afterAllClosed.subscribe((sucesso) => {
      console.log(sucesso);
      this.getListaCategorias();
    },
      error => {
        this.msgError = error;
        console.log("error editCategoria ListaCategoriaComponent : " + error);
      });
  }

}


