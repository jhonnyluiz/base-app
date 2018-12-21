import { Component, OnInit, Input } from '@angular/core';
import { ConfigMenu } from 'src/app/shared/models/config-menu';
import { ItemMenu } from 'src/app/shared/models/item-menu';

@Component({
  selector: 'app-item-submenu',
  templateUrl: './item-submenu.component.html',
  styleUrls: ['./item-submenu.component.css']
})
export class ItemSubmenuComponent implements OnInit {

  @Input() config: ConfigMenu
  @Input() menu: ItemMenu

  constructor() { }

  ngOnInit() {
  }

}
