import { Component, OnInit } from '@angular/core';


export class Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  items = ITEMS;
  cartTotal = 0;

  constructor() { }

  ngOnInit() {
    this.calculateTotal();
  }

  // Add item to ticket.
  addItem(item: Item) {
    // If the item already exists, add 1 to quantity
    if (this.items.includes(item)) {
      this.items[this.items.indexOf(item)].quantity += 1;
    } else {
      this.items.push(item);
    }
    this.calculateTotal();
  }

  removeItem(item: Item) {
    // Check if item is in array
    if (this.items.includes(item)) {
      // Splice the element out of the array
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
    this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;
    // Multiply item price by item quantity, add to total
    this.items.forEach(function(item: Item) {
      total += (item.price * item.quantity);
    });
    this.cartTotal = total;
  }

  clearCart() {
    this.items = [];
    this.calculateTotal();
  }

}


// Demo content
const ITEMS = [
  {id: 1, name: 'Coffee', price: 2.00, quantity: 1},
  {id: 2, name: 'Americano', price: 3.00, quantity: 1},
  {id: 3, name: 'Cappuccino', price: 3.5, quantity: 2},
  {id: 4, name: 'Latte', price: 3.5, quantity: 1},
  {id: 5, name: 'Cortado', price: 3.5, quantity: 2},
];
