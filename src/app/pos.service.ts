import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from './item';

@Injectable()
export class PosService {

  private ticket = TICKET;
  private ticketSource = new BehaviorSubject<Item[]>(this.ticket);
  currentTicket = this.ticketSource.asObservable();

  constructor() { }

  changeTicket(ticket: Item[]) {
    this.ticketSource.next(ticket);
  }

}

// Demo content
const TICKET: Item[] = [
  {id: 1, name: 'Drip Coffee', price: 2.25, img: '../../assets/menu-images/drip-coffee.jpg', quantity: 1},
  {id: 2, name: 'Americano', price: 3.15, img: '../../assets/menu-images/americano.png', quantity: 1},
  {id: 3, name: 'Cappuccino', price: 3.50, img: '../../assets/menu-images/cappuccino.jpg', quantity: 1},
  {id: 4, name: 'Cortado', price: 3.50, img: '../../assets/menu-images/cortado.jpg', quantity: 1},
];
