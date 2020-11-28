import { InputFieldComponent } from './input-field/input-field.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderModule } from './header/header.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent,
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  imports: [
    HeaderModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderModule,
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent,
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ]
})
export class SharedModule { }
