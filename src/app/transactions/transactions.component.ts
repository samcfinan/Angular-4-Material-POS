import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Order, Item } from '../item';
import { LineItemModalComponent } from '../history/line-item-modal/line-item-modal.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  history: any;

  constructor(private db: DatabaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.db.getOrderFeed(25).subscribe(data => this.history = data);
  }

  openDialog(lineItem: Order): void {
    const dialogRef = this.dialog.open(LineItemModalComponent, {
      width: '300px',
      data: { numItems: lineItem.cartNumItems,
        orderNumber: lineItem.orderNumber,
        items: lineItem.items,
        total: lineItem.cartTotal }
    });
  }

  getNextPage() {
    this.db.getNextPage();
  }

}
