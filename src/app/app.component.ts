import { Component } from '@angular/core';
import { Globais } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  titulo = Globais.titulo;
}
