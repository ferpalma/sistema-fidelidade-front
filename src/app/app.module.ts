import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Produto } from './produto/produto';
import { ProdutoService } from './service/produto.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule 
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
