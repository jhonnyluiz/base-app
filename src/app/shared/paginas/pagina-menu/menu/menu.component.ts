import { Component, OnInit, Input } from '@angular/core';
import { ConfigMenu } from 'src/app/shared/models/config-menu';
import { Subscription } from 'rxjs';
import { ItemMenu } from 'src/app/shared/models/item-menu';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() itensMenu: ItemMenu[];
  @Input() config: ConfigMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
