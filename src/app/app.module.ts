import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './component/header/header.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { CardInfoComponent } from './component/card-info/card-info.component';
import { CardImagemComponent } from './component/card-imagem/card-imagem.component';
import { ComponentModule } from './component/component.module';

@NgModule({
  declarations: [
    ComponentModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
