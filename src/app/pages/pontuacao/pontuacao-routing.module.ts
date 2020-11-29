import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PontuacaoPageComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        component: PontuacaoPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PontuacaoRoutingModule { }
