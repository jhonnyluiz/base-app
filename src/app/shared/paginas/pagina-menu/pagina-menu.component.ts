import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../../models/item-menu';
import { ConfigMenu } from '../../models/config-menu';
import { Subscription } from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import {  MENU_PRINCIPAL, MENU_HEADER, CONFIG_MENU } from '../../constants';
import { MenuHeader } from '../../models/menu-header';


@Component({
  selector: 'app-pagina-menu',
  templateUrl: './pagina-menu.component.html',
  styleUrls: ['./pagina-menu.component.css']
})
export class PaginaMenuComponent implements OnInit {

  menuHeader: MenuHeader = MENU_HEADER
  menuPrincipal: ItemMenu[] = MENU_PRINCIPAL
  config: ConfigMenu = CONFIG_MENU
  watcher: Subscription;
  
  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.config.opened = false;
        this.config.over = 'over';
      } else {
        this.config.opened = true;
        this.config.over = 'side';
      }
    });
  }

  ngOnInit() {
  }

}
