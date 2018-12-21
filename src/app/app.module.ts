import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaErro404Component } from './shared/paginas/pagina-erro404/pagina-erro404.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './shared/paginas/dashboard/dashboard.component'
import { MaterialModule } from './shared/paginas/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaErro404Component,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
