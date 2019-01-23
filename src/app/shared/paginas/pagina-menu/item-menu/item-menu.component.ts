import { Component, OnInit, Input } from '@angular/core';
import { ConfigMenu } from 'src/app/shared/models/config-menu';
import { ItemMenu } from 'src/app/shared/models/item-menu';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  @Input() config: ConfigMenu;
  @Input() menu: ItemMenu;

  constructor() { }

  ngOnInit() {
  }

}
