import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index/index.component';
import {CardapioComponent} from './cardapio/cardapio.component';
import {ComponentModule} from '../component/component.module';



@NgModule({
  declarations: [
    IndexComponent,
    CardapioComponent
  ],
  imports: [
    ComponentModule,
    CommonModule
  ]
})
export class PagesModule { }
