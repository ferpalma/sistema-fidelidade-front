import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobrePageComponent } from './containers/sobre-page/sobre-page.component'

const routes: Routes = [
  {
      path: '',
      component: SobrePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreRoutingModule { }
