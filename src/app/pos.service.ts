import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Item } from './item';

@Injectable()
export class PosService {

  private ticket = TICKET;
  private ticketSource = new BehaviorSubject<Item[]>(this.ticket);

  private cartTotal = 0;
  private cartTotalSource = new BehaviorSubject<number>(this.cartTotal);

  currentTicket = this.ticketSource.asObservable();
  currentTotal = this.cartTotalSource.asObservable();

  constructor() { }

  changeTicket(ticket: Item[]) {
    this.ticketSource.next(ticket);
  }

  updateTotal(total: number) {
    this.cartTotalSource.next(total);
  }

}

// Demo content
const TICKET: Item[] = [
];
