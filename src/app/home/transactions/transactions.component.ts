import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { Order, Item } from '../../item';
import { LineItemModalComponent } from '../../home/history/line-item-modal/line-item-modal.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  history;

  displayRows = 25;
  rowOptions = [25, 50, 100, 200];

  constructor(private db: DatabaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.renderNewRows();
  }

  renderNewRows() {
    this.db.updateNumRequested(this.displayRows);
    this.history = this.db.getSnapshot();
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

  deleteOrder(id) {
    this.db.deleteOrder(id);
  }

  getLastOrderId() {}

}
