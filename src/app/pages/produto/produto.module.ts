import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoPageComponent } from './containers/produto-page/produto-page.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';


import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ProdutoPageComponent, CadastroProdutoComponent, ListaProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatCardModule,
    MatToolbarModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
