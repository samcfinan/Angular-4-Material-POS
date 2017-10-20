import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Order, Item } from '../item';
import { LineItemModalComponent } from './line-item-modal/line-item-modal.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history: any;

  constructor(private db: DatabaseService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.db.getOrderFeed(10).subscribe(data => this.history = data);
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

}
