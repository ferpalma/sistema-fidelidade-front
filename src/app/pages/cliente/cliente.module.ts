import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import { ClientePageComponent } from './containers/cliente-page/cliente-page.component';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';

import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [ClientePageComponent, ListaClienteComponent, CadastroClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatCardModule,
    MatToolbarModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TextMaskModule
  ]
})
export class ClienteModule { }
