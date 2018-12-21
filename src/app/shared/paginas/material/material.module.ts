import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatIconModule, 
  MatMenuModule, 
  MatSidenavModule,
  MatExpansionModule, 
  MatListModule,
  MatCardModule,
  MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule
  ],
})
export class MaterialModule { }
