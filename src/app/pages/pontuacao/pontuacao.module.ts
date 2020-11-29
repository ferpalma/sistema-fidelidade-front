import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PontuacaoRoutingModule } from './pontuacao-routing.module';
import { PontuacaoPageComponent } from './containers/pontuacao-page/pontuacao-page.component';
import { CadastroPontuacaoComponent } from './components/cadastro-pontuacao/cadastro-pontuacao.component';

import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PontuacaoPageComponent, CadastroPontuacaoComponent],
  imports: [
    CommonModule,
    PontuacaoRoutingModule,
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
export class PontuacaoModule { }
