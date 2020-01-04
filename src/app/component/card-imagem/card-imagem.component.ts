import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-imagem',
  templateUrl: './card-imagem.component.html',
  styleUrls: ['./card-imagem.component.less']
})
export class CardImagemComponent implements OnInit {

  @Input() titulo: string;
  @Input() preco: number;
  @Input() foto: string;
  @Input() descricao: string;

  constructor() { }

  ngOnInit() {
  }

}
