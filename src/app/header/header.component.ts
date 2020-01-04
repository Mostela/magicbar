import { Component, OnInit } from '@angular/core';
import { PoSlideItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {

  height: number;
  interval: number;
  slideItem: PoSlideItem;
  slideItems: Array<PoSlideItem>;
  listaUltimas: Array<object>;

  constructor() { }

  ngOnInit() {
    this.restore();
    this.listaUltimas = [
      {link: 'cardapio', titulo: 'C6', categoria: '♥'},
      {link: 'cardapio', titulo: 'C6', categoria: '♥'},
      {link: 'cardapio', titulo: 'C6', categoria: '♥'},
      {link: 'cardapio', titulo: 'C6', categoria: '♥'},
      {link: 'cardapio', titulo: 'C6', categoria: '♥'}
    ];
  }

  restore() {
    this.interval = 1000;
    this.height = undefined;
    this.slideItems = [
      { image: 'https://www.causaoperaria.org.br/wp-content/uploads/2019/07/Portinari-1024x585.jpg'},
      { image: 'https://static.todamateria.com.br/upload/ro/me/romero-britto-og.jpg'}
    ];
  }
}
