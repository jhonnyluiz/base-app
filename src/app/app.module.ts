import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/paginas/material/material.module';
import { MatPaginatorIntl } from '@angular/material';
import { PaginaErro404Component } from './shared/paginas/pagina-erro404/pagina-erro404.component';
import { PaginadorBr } from './shared/paginadorBr';
import { HttpClientModule } from '@angular/common/http';
import { EmissorEventService } from './shared/services/event/emissor-event.service';
import { AlertSnackbarComponent } from './shared/paginas/alert-snackbar/alert-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaErro404Component,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    EmissorEventService,
    { provide: MatPaginatorIntl, useClass: PaginadorBr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
