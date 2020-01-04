import { Component, OnInit } from '@angular/core';
import { promocaoLista } from './promocao_list';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  produtos = promocaoLista;
  constructor() { }

  ngOnInit() {
  }

}
