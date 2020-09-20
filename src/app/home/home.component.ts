import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService} from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produto = {} as Produto;
  produtos: Produto[];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
    
  }
  getProdutos() {
    this.produtoService.getProduto().subscribe((produtos: Produto[]) => {
      this.produtos= produtos;
    });
  }
}
