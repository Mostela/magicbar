import { Component, OnInit } from '@angular/core';
import {MeuMenu} from './menu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  titulo = 'Magic Bar';
  menu = MeuMenu;
  constructor() {}
  ngOnInit() {
  }

}
