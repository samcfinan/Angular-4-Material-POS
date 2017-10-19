import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Order, Item } from '../item';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history: any;

  constructor(private db: DatabaseService) {

  }

  ngOnInit() {
    this.db.getTicketList(10).subscribe(data => this.history = data);
  }

}
