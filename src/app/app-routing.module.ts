import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'cardapio', component: CardapioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
