import { Component, OnInit, Input } from '@angular/core';
import { ItemMenu } from 'src/app/shared/models/item-menu';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  @Input() menu: ItemMenu[]

  constructor() { }

  ngOnInit() {
  }

}
