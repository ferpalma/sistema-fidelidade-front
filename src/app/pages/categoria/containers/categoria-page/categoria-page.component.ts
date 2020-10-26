import { Component, OnInit } from '@angular/core';

import { Categoria } from '../categoria';
import { CategoriaService } from '../../../../service/categoria.service'

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrls: ['./categoria-page.component.scss']
})
export class CategoriaPageComponent implements OnInit {

  categoria: Categoria;
  success: boolean = false;
  errors: String[];
  constructor(private service: CategoriaService) {
      this.categoria = new Categoria();
  }

  ngOnInit(): void {
  }

  onSubmit() {

      this.service.
          salvar(this.categoria).
          subscribe(response => {
              this.success = true;
              this.errors = null;
          }, errorResponse => {
              this.success = false;
              this.errors = errorResponse.error.errors;
          }
       );
  }

}
