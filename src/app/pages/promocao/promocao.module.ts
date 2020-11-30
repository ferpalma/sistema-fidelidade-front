import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PromocaoRoutingModule } from './promocao-routing.module';
import { PromocaoPageComponent } from './containers/promocao-page/promocao-page.component';
import { CadastroPromocaoComponent } from './components/cadastro-promocao/cadastro-promocao.component';

import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PromocaoPageComponent, CadastroPromocaoComponent],
  imports: [
    CommonModule,
    PromocaoRoutingModule,
    MatCardModule,
    MatToolbarModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PromocaoModule { }
