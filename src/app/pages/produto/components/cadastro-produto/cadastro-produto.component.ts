import { Categoria } from './../../../categoria/models/categoria';
import { Component, OnInit } from '@angular/core';
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

  constructor(private produtoService: ProdutoService, categoriaService: CategoriaService, public dialogRef: MatDialogRef<CadastroProdutoComponent>, @Inject(MAT_DIALOG_DATA) public data: Produto) {}

  ngOnInit() {
    this.getListaProduto();
    this.getListaCategoria();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // define se uma produto será criada ou atualizada
  saveProduto(form: NgForm) {
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
}

