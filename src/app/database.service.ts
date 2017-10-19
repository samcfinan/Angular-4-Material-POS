import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item, Order } from './item';

@Injectable()
export class DatabaseService {

  currentOrderNumber;

  constructor(private db: AngularFireDatabase) { }

  getTicketList() {
    return this.db.list<Order>('past_orders').valueChanges();
  }

  getLatestOrderNumber() {
    this.db.object<Order>('past_orders').valueChanges().subscribe(data => this.currentOrderNumber = data);
  }

  pushData(itemList: Item[], total: number, cartNumItems: number) {
    const date = Date.now().toString();
    const ticket = new Order(date, itemList, total, cartNumItems);
    this.db.list<any>('past_orders').push(ticket);
  }

}
