import { Component, OnInit } from '@angular/core';

import { Categoria } from '../categoria';
import { CategoriaService } from '../../../../service/categoria.service'

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrls: ['./categoria-page.component.scss']
})
export class CategoriaPageComponent implements OnInit {

  constructor() {
     
  }

  ngOnInit(): void {
  }



}
