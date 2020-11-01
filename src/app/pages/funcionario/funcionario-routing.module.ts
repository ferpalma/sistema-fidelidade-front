import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FuncionarioPageComponent } from './containers/funcionario-page/funcionario-page.component';

const routes: Routes = [
  {
    path: '',
    component: FuncionarioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
