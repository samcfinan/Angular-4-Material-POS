import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item, Order } from './item';

@Injectable()
export class DatabaseService {

  private history;
  private past_orders = this.afs.collection<Order>('past_orders');

  constructor(private afs: AngularFirestore, private firebaseApp: FirebaseApp) {
    const storage = firebaseApp.storage().ref();
  }

  getTicketList() {
    return this.afs.collection<Order>('past_orders', ref => ref.orderBy('orderNumber', 'desc').limit(10)).valueChanges();
  }

  pushOrder(itemList: Item[], total: number, cartNumItems: number) {
    const date = Date.now().toString();
    const ticket: Order = {orderNumber: date, items: itemList, cartTotal: total, cartNumItems: cartNumItems};
    this.past_orders.add(ticket);
  }

}
