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
import { HorariosModule } from './horarios/horarios.module';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    CardInfoComponent,
    CardImagemComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PoSlideModule,
    HorariosModule
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
    FooterComponent,
    HorariosModule,
    AlertComponent
  ]
})
export class ComponentModule { }
