import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioPageComponent } from './containers/funcionario-page/funcionario-page.component';


@NgModule({
  declarations: [FuncionarioPageComponent],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
