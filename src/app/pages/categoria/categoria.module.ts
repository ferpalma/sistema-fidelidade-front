import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CategoriaPageComponent } from './containers';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FormsModule }   from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [CategoriaPageComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule
  ]
})
export class CategoriaModule { }