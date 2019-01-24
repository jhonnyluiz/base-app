import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/paginas/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaTableComponent } from './sistema-table/sistema-table.component';
import { SistemaService } from './sistema.service';
import { SistemaDialogComponent } from './sistema-dialog/sistema-dialog.component';
import { EmissorEventService } from 'src/app/shared/services/event/emissor-event.service';

@NgModule({
  declarations: [
    SistemaComponent,
    SistemaTableComponent,
    SistemaDialogComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    MaterialModule,
    FormsModule
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
