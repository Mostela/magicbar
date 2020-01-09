import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ComponentModule } from '../component/component.module';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    CardapioComponent,
    ComponentModule,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    CardapioComponent,
    IndexComponent
  ],
  exports: [
    PagesModule
  ]
})
export class PagesModule { }
