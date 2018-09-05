import { Component, OnInit } from '@angular/core';
import { MercadolistaService } from '../mercadolista.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalnalista: number;
  title = "Lista de Supermercado";
  listateste: string;
  lista = [];
  constructor(private list: MercadolistaService) { }

  ngOnInit() {
    this.list.listageral.subscribe(res => this.lista = res);
    this.totalnalista = this.lista.length;
    this.list.mudarLista(this.lista);
  }

  adicionarNaLista(){
    this.lista.push(this.listateste);
    this.listateste = '';
    this.totalnalista = this.lista.length;
    this.list.mudarLista(this.lista);
    
  }

  removerDaLista(i){
    this.lista.splice(i, 1);
    this.totalnalista = this.lista.length;
    this.list.mudarLista(this.lista);
  }

}
