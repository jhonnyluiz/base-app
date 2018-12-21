import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SistemaRoutingModule } from './sistema-routing.module';

@NgModule({
  declarations: [SistemaComponent],
  imports: [
    CommonModule,
    SistemaRoutingModule
  ]
})
export class SistemaModule { }
