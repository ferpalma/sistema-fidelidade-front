import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService} from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
