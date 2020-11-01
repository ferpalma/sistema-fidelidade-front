import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioPageComponent } from './containers/funcionario-page/funcionario-page.component';
import { ListaFuncionarioComponent } from './components/lista-funcionario/lista-funcionario.component';
import { CadastroFuncionarioComponent } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { EditarFuncionarioComponent } from './components/editar-funcionario/editar-funcionario.component';


@NgModule({
  declarations: [FuncionarioPageComponent, ListaFuncionarioComponent, CadastroFuncionarioComponent, EditarFuncionarioComponent],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
