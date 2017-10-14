import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { PosService } from '../pos.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticket: Item[] = [];

  items = ITEMS;
  cartTotal = 0;

  constructor(private ticketSync: PosService) { }

  ngOnInit() {
    this.ticketSync.currentTicket.subscribe(data => this.ticket = data);
    this.calculateTotal();
  }

  // Add item to ticket.
  addItem(item: Item) {
    // If the item already exists, add 1 to quantity
    if (this.ticket.includes(item)) {
      this.ticket[this.ticket.indexOf(item)].quantity += 1;
    } else {
      this.ticket.push(item);
    }
    this.syncTicket();
    this.calculateTotal();
  }

  removeItem(item: Item) {
    // Check if item is in array
    if (this.ticket.includes(item)) {
      // Splice the element out of the array
      const index = this.ticket.indexOf(item);
      if (index > -1) {
        this.ticket.splice(index, 1);
      }
    }
    this.syncTicket();
    this.calculateTotal();
  }

  // Reduce quantity by one
  subtractOne(item: Item) {
    // Check if last item, if so, use remove method
    if (this.ticket[this.ticket.indexOf(item)].quantity === 1) {
      this.removeItem(item);
    } else {
      this.ticket[this.ticket.indexOf(item)].quantity = this.ticket[this.ticket.indexOf(item)].quantity - 1;
    }
    this.syncTicket();
    this.calculateTotal();
  }

  // Calculate cart total
  calculateTotal() {
    let total = 0;
    // Multiply item price by item quantity, add to total
    this.ticket.forEach(function(item: Item) {
      total += (item.price * item.quantity);
    });
    this.cartTotal = total;
  }

  // Remove all items from cart
  clearCart() {
    this.ticket = [];
    this.syncTicket();
    this.calculateTotal();
  }

  syncTicket() {
    this.ticketSync.changeTicket(this.ticket);
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
