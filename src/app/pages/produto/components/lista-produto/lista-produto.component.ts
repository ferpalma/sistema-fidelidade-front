import { ProdutoService } from './../../services/produto.service';
import { Observable } from 'rxjs';
import { Produto } from './../../models/produto';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component'

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {

  public listaProdutos$: Observable<Produto[]>;

  ngOnInit(): void {
    this.getListaProdutos();
  }

  constructor(public dialog: MatDialog,
    private produtoService: ProdutoService) {}

    // Chama o serviço para obtém todas as produtos
    private getListaProdutos() {
      this.listaProdutos$ = this.produtoService.getListaProdutos();
    }

  public openDialog() {
    this.dialog.open(CadastroProdutoComponent, {
      width: '50%'
    });
    this.dialog.afterAllClosed.subscribe(() => { this.getListaProdutos(); });
  }

    // deleta uma Produto
    public deleteProduto(produto: Produto) {
      console.log("deleteProduto :" + produto.nome);
      this.produtoService.deleteProduto(produto).subscribe((res) => {
        this.getListaProdutos();
      });
    }
  
    public editProduto(produto: Produto): void {
      console.log("editProduto :" + produto.nome);
      this.dialog.open(CadastroProdutoComponent, {
        width: '50%',
        data: produto
      });
      this.dialog.afterAllClosed.subscribe(() => { this.getListaProdutos(); });    
    }

}
