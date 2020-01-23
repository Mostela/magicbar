import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorariosComponent } from './horarios.component';
import { HorariosService } from './horarios.service';
import { PoCalendarModule,PoFieldModule  } from '@portinari/portinari-ui';
import { PoButtonModule } from '@portinari/portinari-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    HorariosComponent,
    AlertComponent
  ],
  providers:[
    HorariosService
  ],
  imports: [
    CommonModule,
    PoCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    PoFieldModule,
    PoButtonModule
  ],
  exports: [
    HorariosComponent,
    AlertComponent
  ]
})
export class HorariosModule { }
