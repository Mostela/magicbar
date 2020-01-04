import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.less']
})
export class CardInfoComponent implements OnInit {

  @Input() titulo: string;
  @Input() link: string;
  @Input() categoria: string;
  private icone: string;
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.titulo == null || this.link == null) {
      this.restore();
    } else {
      this.icone = this.categoria;
      // this.defineIcone(this.categoria);
    }
  }

  restore() {
    this.titulo = 'Inicio';
    this.link = '';
    this.defineIcone(this.categoria);
  }

  defineIcone(categoria) {
    if (categoria === 'bebida') {
      this.icone = 'Bebida';
    } else {
      if (categoria === 'servico') {
        this.icone = 'serviço';
      } else {
        this.icone = 'Comida';
      }
    }
  }

  GoTo() {
    this.router.navigate([this.link]);
  }

}
