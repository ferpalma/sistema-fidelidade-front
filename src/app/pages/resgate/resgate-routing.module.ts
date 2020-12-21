import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResgatePageComponent } from './containers';

const routes: Routes = [
  {
      path: '',
      component: ResgatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResgateRoutingModule { }
