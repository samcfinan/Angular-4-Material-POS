import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item, Order } from './item';

@Injectable()
export class DatabaseService {

  ordersCollection: AngularFirestoreCollection<Order>;
  orderDocument: AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.ordersCollection = this.afs.collection('past_orders', ref => ref.orderBy('orderNumber', 'desc').limit(10));
  }

  getOrderFeed(returnLast: number) {
    return this.ordersCollection.valueChanges();
  }

  updateNumRequested(num) {
    this.ordersCollection = this.afs.collection('past_orders', ref => ref.orderBy('orderNumber', 'desc').limit(num));
  }

  getSnapshot() {
    return this.ordersCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        return { id: a.payload.doc.id, ...a.payload.doc.data() };
      });
    });
  }

  getOrder(id) {
    return this.afs.doc<Order>('past_orders/' + id);
  }

  pushOrder(itemList: Item[], total: number, cartNumItems: number) {
    const date = Date.now().toString();
    const ticket: Order = {orderNumber: date, items: itemList, cartTotal: total, cartNumItems: cartNumItems};

    return this.ordersCollection.add(ticket);
  }

  deleteOrder(id) {
    return this.getOrder(id).delete();
  }

}
