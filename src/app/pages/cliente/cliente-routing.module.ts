import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePageComponent } from './containers/cliente-page/cliente-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClientePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
