import { Injectable, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Item, Order, Upload } from './item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  ordersCollection: AngularFirestoreCollection<Order>;
  orderDocument: AngularFirestoreDocument<Node>;

  itemsCollection: AngularFirestoreCollection<Item>;
  itemDocument: AngularFirestoreDocument<Node>;

  uploadsRef: AngularFirestoreCollection<Upload>;
  uploads: Observable<Upload[]>;
  lastUpload: Upload;

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

  pushItem(name: string, price: number, type: string, image: Upload) {
    this.pushUpload(image);
    const item: Item = {name: name, price: price, item_type: type, quantity: 1, img: this.lastUpload.url};
    return this.itemsCollection.add(item);
  }

  getItems() {
    return this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        return { id: a.payload.doc.id, ...a.payload.doc.data() };
      });
    });
  }

  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${'/'}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.lastUpload = upload;
      }
    );
  }


}
