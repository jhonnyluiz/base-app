import { MaterialModule } from './../../shared/paginas/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaTableComponent } from './sistema-table/sistema-table.component';
import { SistemaService } from './sistema.service';

@NgModule({
  declarations: [
    SistemaComponent,
    SistemaTableComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    MaterialModule
  ],
  exports: [
    SistemaComponent,
    SistemaTableComponent
  ],
  providers: [
    SistemaService
  ]
})
export class SistemaModule { }
