import { Component, OnInit } from '@angular/core';
import {MeuMenu} from './menu';
import { Globais } from '../../globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent implements OnInit {
  titulo = Globais.titulo;
  menu = MeuMenu.reverse();
  constructor() {}
  ngOnInit() {
  }

}
