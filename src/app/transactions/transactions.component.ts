import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Order, Item } from '../item';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  history: any;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getTicketList(5).subscribe(data => this.history = data);
  }

}
