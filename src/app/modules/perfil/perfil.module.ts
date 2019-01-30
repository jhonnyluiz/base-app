import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/paginas/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilTableComponent } from './perfil-table/perfil-table.component';
import { PerfilDialogComponent } from './perfil-dialog/perfil-dialog.component';
import { PerfilService } from './perfil.service';
import { AlertSnackbarComponent } from 'src/app/shared/paginas/alert-snackbar/alert-snackbar.component';

@NgModule({
  declarations: [
    PerfilComponent,
    PerfilTableComponent,
    PerfilDialogComponent,
    AlertSnackbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    PerfilComponent,
  ],
  providers: [
    PerfilService
  ],
  entryComponents: [
    PerfilDialogComponent,
    AlertSnackbarComponent,
  ]
})
export class PerfilModule { }
