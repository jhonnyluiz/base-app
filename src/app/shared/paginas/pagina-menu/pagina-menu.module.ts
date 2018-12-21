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

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PaginaMenuRoutingModule
  ],
  declarations: [
    PaginaMenuComponent,
    ItemMenuComponent,
    ItemSubmenuComponent,
    MenuComponent,
    HeaderComponent,
    MenuSuperiorComponent
  ]
})
export class PaginaMenuModule { }
