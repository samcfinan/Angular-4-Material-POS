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
];
