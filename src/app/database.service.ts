import { Injectable, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item, Order } from './item';

@Injectable()
export class DatabaseService {

  ordersCollection: AngularFirestoreCollection<Order>;
  orderDocument: AngularFirestoreDocument<Node>;

  itemsCollection: AngularFirestoreCollection<Item>;
  itemDocument: AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.ordersCollection = this.afs.collection('past_orders', ref => ref.orderBy('orderNumber', 'desc').limit(10));
    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('item_type'));
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

  // Edit POS Items

  getItem(id) {
    return this.afs.doc<Item>('items/' + id);
  }

  deleteItem(id) {
    return this.getItem(id).delete();
  }

  updateItem(id, itemdata: Item) {
    return this.getItem(id).update(itemdata);
  }

  pushItem(name: string, price: number, type: string) {
    const item: Item = {name: name, price: price, item_type: type, quantity: 1};
    return this.itemsCollection.add(item);
  }

  getItems() {
    return this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        return { id: a.payload.doc.id, ...a.payload.doc.data() };
      });
    });
  }

}
