import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioPageComponent } from './containers/funcionario-page/funcionario-page.component';
import { ListaFuncionarioComponent } from './components/lista-funcionario/lista-funcionario.component';
import { CadastroFuncionarioComponent } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { SuccessToastComponent } from './components/success-toast/success-toast.component';


@NgModule({
  declarations: [FuncionarioPageComponent, ListaFuncionarioComponent, CadastroFuncionarioComponent, SuccessToastComponent],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class FuncionarioModule { }
