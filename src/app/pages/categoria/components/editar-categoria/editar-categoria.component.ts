import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  // categoria = {} as Categoria;
  listaCategoria: Categoria[];

  constructor(private categoriaService: CategoriaService, 
    public dialogRef: MatDialogRef<EditarCategoriaComponent>, 
    @Inject(MAT_DIALOG_DATA) 
    public categoria: Categoria) {}
  
  ngOnInit() {
    this.getListaCategoria();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  // define se uma categoria será atualizada
  saveCategoria(form: NgForm) {
    console.log(this.categoria);
    this.categoriaService.updateCategoria(this.categoria)
    .subscribe(() => {
      this.cleanForm(form);
    });
  }

  // Chama o serviço para obter todas as categorias
  getListaCategoria() {
    this.categoriaService.getListaCategoria().subscribe((listaCategoria: Categoria[]) => {
      this.listaCategoria = listaCategoria;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaCategoria();
    form.resetForm();
    this.categoria = {} as Categoria;
  }
}
