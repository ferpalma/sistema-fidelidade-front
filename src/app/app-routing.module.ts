import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
    { path: 'categoria', component: CategoriaComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }