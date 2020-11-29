import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontuacaoRoutingModule } from './pontuacao-routing.module';
import { PontuacaoPageComponent } from './containers/pontuacao-page/pontuacao-page.component';
import { ListaPontuacaoComponent } from './components/lista-pontuacao/lista-pontuacao.component';
import { CadastroPontuacaoComponent } from './components/cadastro-pontuacao/cadastro-pontuacao.component';


@NgModule({
  declarations: [PontuacaoPageComponent, ListaPontuacaoComponent, CadastroPontuacaoComponent],
  imports: [
    CommonModule,
    PontuacaoRoutingModule
  ]
})
export class PontuacaoModule { }
