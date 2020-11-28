import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CategoriaPageComponent } from './containers';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaCategoriaComponent } from './components/lista-categoria/lista-categoria.component';

import {MatButtonModule} from '@angular/material/button';
import { CadastroCategoriaComponent } from './components/cadastro-categoria/cadastro-categoria.component';


@NgModule({
  declarations: [CategoriaPageComponent,
    ListaCategoriaComponent, 
    CadastroCategoriaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule,
    MatButtonModule,    
    ReactiveFormsModule,
  ]
})
export class CategoriaModule { }