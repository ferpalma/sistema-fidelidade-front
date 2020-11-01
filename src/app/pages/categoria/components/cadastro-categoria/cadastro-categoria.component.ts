import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  //categoria_obj = {} as Categoria;
  listaCategoria: Categoria[];

  constructor(private categoriaService: CategoriaService, public dialogRef: MatDialogRef<CadastroCategoriaComponent>, @Inject(MAT_DIALOG_DATA) public categoria: Categoria) {}
  
  ngOnInit() {
    this.getListaCategoria();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  // define se uma categoria será criada ou atualizada
  saveCategoria(form: NgForm) {
    if (this.categoria.id !== undefined) {
      this.categoriaService.updateCategoria(this.categoria).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.categoriaService.saveCategoria(this.categoria).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obter todas as categorias
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

  // copia a categoria para ser editada
  editCategoria(categoria: Categoria) {
    this.categoria = { ...categoria };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaCategoria();
    form.resetForm();
    this.categoria = {} as Categoria;
  }
}
