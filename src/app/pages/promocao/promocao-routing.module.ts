import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocaoPageComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        component: PromocaoPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocaoRoutingModule { }
