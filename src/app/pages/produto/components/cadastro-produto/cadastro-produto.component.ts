import { Categoria } from './../../../categoria/models/categoria';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ProdutoService } from '../../services/produto.service';

import { CategoriaService } from './../../../categoria/services/categoria.service';
import { Produto } from '../../models/produto';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})

export class CadastroProdutoComponent implements OnInit {

  categoria = {} as Categoria;
  listaCategoria: Categoria[];

  produto = {} as Produto;
  listaProduto: Produto[];

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService, public dialogRef: MatDialogRef<CadastroProdutoComponent>, @Inject(MAT_DIALOG_DATA) public data: Produto) {}

  ngOnInit() {
    this.getListaProduto();
    this.getListaCategoria();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // define se uma produto será criada ou atualizada
  saveProduto(form: NgForm) {
    console.log(this.produto);
    console.log(this.categoria);
    this.produtoService.saveProduto(this.produto).subscribe(() => {
      this.cleanForm(form);
    });
  }
    // Chama o serviço para obter todas as categorias
    getListaCategoria() {
      this.categoriaService.getListaCategoria().subscribe((listaCategoria: Categoria[]) => {
        this.listaCategoria = listaCategoria;
      });
    }

  // Chama o serviço para obter todas as produtos
  getListaProduto() {
    this.produtoService.getListaProduto().subscribe((listaProduto: Produto[]) => {
      this.listaProduto = listaProduto;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaProduto();
    form.resetForm();
    this.produto = {} as Produto;
  }

  onSelectName({id, nome}): void {
    // this.selectedName = name;         // Not Recommended; With this, you can now reset the selectedName value to just the name value

    this.categoria.nome = nome;                 // Create new variable to store the name, if you will reassign the selectedName model value which holds ID and Name based on the template [ngValue], it will not reflect the updated data if you reassign it to just name. I suggest you create new one that acts as your official model name to store the selected name.

    console.log(id);                  // and fetch its ID as well, depends on how you want to use this.
 }
}

