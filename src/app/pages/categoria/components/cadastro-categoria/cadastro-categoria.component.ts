import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  categoria = {} as Categoria;
  listaCategoria: Categoria[];

  constructor(private categoriaService: CategoriaService) {}
  
  ngOnInit() {
    this.getListaCategoria();
  }

  // defini se um categoriaro será criado ou atualizado
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

  // Chama o serviço para obtém todos os categoriaros
  getListaCategoria() {
    this.categoriaService.getListaCategoria().subscribe((listaCategoria: Categoria[]) => {
      this.listaCategoria = listaCategoria;
    });
  }

  // deleta um categoriaro
  deleteCategoria(categoria: Categoria) {
    this.categoriaService.deleteCategoria(categoria).subscribe(() => {
      this.getListaCategoria();
    });
  }

  // copia o categoriaro para ser editado.
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
