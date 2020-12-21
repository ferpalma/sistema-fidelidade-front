import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { SobreRoutingModule } from './sobre-routing.module';
import { SobrePageComponent } from './containers/sobre-page/sobre-page.component';

import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../../../environments/environment.prod';

@NgModule({
  declarations: [SobrePageComponent],
  imports: [
    CommonModule,
    SobreRoutingModule,
    MatCardModule,
    MatToolbarModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatDialogModule
  ]
})
export class SobreModule { }
