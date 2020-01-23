import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {

  @Input() mensagem :string = "erro";
  @Input() color: string = "#FFF";
  @Input() background: string = "crimson";
  @Input() visibilidade: boolean;
  display: string;
  constructor() { }

  ngOnInit() {
    
  }

}
