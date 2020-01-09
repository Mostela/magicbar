import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImagemComponent } from './card-imagem/card-imagem.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardImagemComponent,
    CardInfoComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  exports: [
    CardImagemComponent,
    CardInfoComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ]
})
export class ComponentModule { }
