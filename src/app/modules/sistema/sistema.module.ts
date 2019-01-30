import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/paginas/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaTableComponent } from './sistema-table/sistema-table.component';
import { SistemaService } from './sistema.service';
import { SistemaDialogComponent } from './sistema-dialog/sistema-dialog.component';
import { SistemaFormComponent } from './sistema-form/sistema-form.component';
import { PerfilModule } from '../perfil/perfil.module';

@NgModule({
  declarations: [
    SistemaComponent,
    SistemaTableComponent,
    SistemaDialogComponent,
    SistemaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PerfilModule,
    SistemaRoutingModule,
  ],
  exports: [
    SistemaComponent,
    SistemaTableComponent
  ],
  providers: [
    SistemaService
  ],
  entryComponents: [
    SistemaDialogComponent
  ]
})
export class SistemaModule { }
