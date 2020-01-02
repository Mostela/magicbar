import { Component, OnInit } from '@angular/core';
import { redesociais } from './redesociais';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  redessocial = redesociais;
  constructor() {}
  ngOnInit() {
  }

}
