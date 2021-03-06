import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaMenuComponent } from './pagina-menu.component';
import { MaterialModule } from '../material/material.module';
import { PaginaMenuRoutingModule } from './pagina-menu-routing.module';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { ItemSubmenuComponent } from './item-submenu/item-submenu.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { SistemaModule } from 'src/app/modules/sistema/sistema.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SistemaModule,
    PaginaMenuRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ItemMenuComponent,
    ItemSubmenuComponent,
    MenuComponent,
    MenuSuperiorComponent,
    PaginaMenuComponent
  ],
  exports: [
  ]
})
export class PaginaMenuModule { }
