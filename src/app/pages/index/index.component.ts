import { Component, OnInit } from '@angular/core';
import { Globais } from '../../globals';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  titulo = Globais.titulo;
  constructor() { }

  ngOnInit() {
  }

}
