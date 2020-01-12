import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CardInfoComponent} from './card-info/card-info.component';
import {CardImagemComponent} from './card-imagem/card-imagem.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PoSlideModule} from '@portinari/portinari-ui';



@NgModule({
  declarations: [
    CardInfoComponent,
    CardImagemComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PoSlideModule
  ],
  exports: [
    CardInfoComponent,
    CardImagemComponent,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentModule { }
