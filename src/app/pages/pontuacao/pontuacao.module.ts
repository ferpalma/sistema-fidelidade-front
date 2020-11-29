import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontuacaoRoutingModule } from './pontuacao-routing.module';
import { PontuacaoPageComponent } from './containers/pontuacao-page/pontuacao-page.component';


@NgModule({
  declarations: [PontuacaoPageComponent],
  imports: [
    CommonModule,
    PontuacaoRoutingModule
  ]
})
export class PontuacaoModule { }
