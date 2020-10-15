import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProdutoService } from './service/produto.service';
import { CategoriaService } from './service/categoria.service';

import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriaComponent,
    ProdutoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProdutoModule,
    CategoriaModule,
    AppRoutingModule
  ],
  providers: [
    ProdutoService,
    CategoriaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
