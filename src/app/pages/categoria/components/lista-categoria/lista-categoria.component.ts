import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { NgForm } from '@angular/forms';

import { CadastroCategoriaComponent } from '../cadastro-categoria/cadastro-categoria.component'
import { EditarCategoriaComponent } from '../editar-categoria/editar-categoria.component'

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.scss']
})
export class ListaCategoriaComponent implements OnInit {

  categoria = {} as Categoria;
  listaCategoria: Categoria[];

  ngOnInit(): void {
    this.getListaCategoria();
  }

  constructor(public dialog: MatDialog, private categoriaService: CategoriaService) {}



  openDialog() {
    this.dialog.open(CadastroCategoriaComponent, {
      width: '450px'
    });
  }


  // Chama o serviço para obtém todas as categorias
  getListaCategoria() {
    this.categoriaService.getListaCategoria().subscribe((listaCategoria: Categoria[]) => {
      this.listaCategoria = listaCategoria;
    });
  }

  // deleta uma categoria
  deleteCategoria(categoria: Categoria) {
    this.categoriaService.deleteCategoria(categoria).subscribe(() => {
      this.getListaCategoria();
    });
  }

  // copia o categoriaro para ser editado.
  // editCategoria(categoria: Categoria) {
  //   this.categoria = { ...categoria };
  //   this.dialog.open(CadastroCategoriaComponent, {
  //     data:{
  //       nome: this.categoria.nome
  //     }
  //   });
  // }

  editCategoria(categoria: Categoria): void {
    this.categoria = { ...categoria };
    const dialogRef = this.dialog.open(EditarCategoriaComponent, {
      width: '450px',
      data: {idCategoria: this.categoria.idCategoria, nome: this.categoria.nome, status: this.categoria.status}
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaCategoria();
    form.resetForm();
    this.categoria = {} as Categoria;
  }
}


