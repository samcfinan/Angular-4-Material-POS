import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  productTypes = ['Drink', 'Food'];
  addItemActive = false;

  newItemPrice: number;
  newItemName: string;
  newItemType: string;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

  addItemToggle() {
    if (this.addItemActive === true) {
      this.addItemActive = false;
    } else {
      this.addItemActive = true;
    }
  }

  addItem() {
    this.newItemPrice = this.newItemPrice.valueOf();
    this.db.pushItem(this.newItemName, this.newItemPrice, this.newItemType);
    this.newItemName = null;
    this.newItemPrice = null;
    this.newItemType = null;
  }

}
