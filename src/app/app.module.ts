import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './header/header.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { CardInfoComponent } from './card-info/card-info.component';

@NgModule({
  declarations: [
    CardapioComponent,
    NavbarComponent,
    FooterComponent,
    AppComponent,
    IndexComponent,
    HeaderComponent,
    CardInfoComponent
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
