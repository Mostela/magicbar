import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    CardapioComponent,
    NavbarComponent,
    FooterComponent,
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
