import { HomeClienteModule } from './home-cliente.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeClientePageComponent} from './containers';
const routes: Routes = [
  {
      path: '',
      component: HomeClientePageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeClienteRoutingModule { }
