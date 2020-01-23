import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.less']
})
export class HorariosComponent implements OnInit {

  event;
  dateSelec: string;
  locale: string;
  maxDate: string | Date;
  minDate: string | Date;
  vbFimSemana: boolean;
  vbReservaMesa: boolean;

  ngOnInit() {
    const date = new Date();
    this.maxDate = this.retornaMaiorData(4);
    this.minDate = this.retornaMaiorData(1);
    this.vbFimSemana =true;
  }

  private retornaMaiorData(nroMesAdicional){
    const date = new Date();
    let mes = (date.getMonth()+nroMesAdicional) < 10
      ? '0'+(date.getMonth()+nroMesAdicional)
      : date.getMonth()+nroMesAdicional;
    mes = mes > 11 ? '01' : mes;
    return date.getFullYear()+'-'+mes+'-'+date.getDate();
  }

  EventEmitter() {
    this.dateSelec = this.verificaData(this.dateSelec);
  }
  private verificaData(DateSelect){
    // IMPEDE QUE O SELECIONE OS FINAIS DE SEMANA
    let dataCheck = new Date(DateSelect);
    // Se selecionado o final de semana Day(5,6) pula para dois dias a frente
    this.vbFimSemana = dataCheck.getDay() > 4 ? false : true;
    let dayWeek = dataCheck.getDay() > 4 ? dataCheck.getDate() +3 : dataCheck.getDate()+1;
    // Aredonda o mês para o po-calendar
    let mes = (dataCheck.getMonth()+1) < 10 ? '0'+(dataCheck.getMonth()+1) : dataCheck.getMonth()+1;
    // Pula o ano
    mes = mes > 11 ? '01' : mes;
    //Define o dia
    const dia = dayWeek < 10 ? '0'+dayWeek : dayWeek;
    return dataCheck.getFullYear()+'-'+mes+'-'+dia;
  }

  /*

  */
  ReservaMesa(){
    this.vbReservaMesa = this.vbReservaMesa == true ? false : true;
  }

  SalvaRerva(){
    
  }
}
