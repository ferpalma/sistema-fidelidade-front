import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoPageComponent } from './containers/produto-page/produto-page.component';



const routes: Routes = [
  {
    path: '',
    component: ProdutoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
