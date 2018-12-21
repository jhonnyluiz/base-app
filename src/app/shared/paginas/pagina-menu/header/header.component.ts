import { Component, OnInit, Input } from '@angular/core';
import { MenuHeader } from 'src/app/shared/models/menu-header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() menuHeader: MenuHeader

  constructor() { }

  ngOnInit() {
  }

}
