import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadolistaService {
  
  private lista = new BehaviorSubject<any>(['Banana', 'Maçã']);
  listageral = this.lista.asObservable();
  constructor() { }

  mudarLista(listageral){
    this.lista.next(listageral);
  }
}
