import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item, Order } from '../../item';
import { PosService } from '../../pos.service';
import {MatTabsModule} from '@angular/material';


@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  drink = DRINK;
  food = EAT;
  ticket: Item[];
  cartTotal = 0;
  cartNumItems = 0;

  constructor(private ticketSync: PosService) { }

  ngOnInit() {
    this.ticketSync.currentTicket.subscribe(data => this.ticket = data);
    this.ticketSync.currentTotal.subscribe(total => this.cartTotal = total);
    this.ticketSync.currentCartNum.subscribe(num => this.cartNumItems);
  }

  addToCheck(item: Item) {
    // If the item already exists, add 1 to quantity
    if (this.ticket.includes(item)) {
      this.ticket[this.ticket.indexOf(item)].quantity += 1;
    } else {
      this.ticket.push(item);
    }
    this.calculateTotal();
  }

  // Calculate cart total
  calculateTotal() {
    let total = 0;
    let cartNum = 0;
    // Multiply item price by item quantity, add to total
    this.ticket.forEach(function(item: Item) {
      total += (item.price * item.quantity);
      cartNum += item.quantity;
    });
    this.cartTotal = total;
    this.cartNumItems = cartNum;
    this.ticketSync.updateNumItems(this.cartNumItems);
    this.ticketSync.updateTotal(this.cartTotal);
  }

  syncTicket() {
    this.ticketSync.changeTicket(this.ticket);
  }


}

const DRINK: Item[] = [
  {id: 1, name: 'Drip Coffee', price: 2.25, item_type: 'Drink', img: '../../assets/menu-images/drip-coffee.jpg', quantity: 1},
  {id: 2, name: 'Americano', price: 3.15, item_type: 'Drink', img: '../../assets/menu-images/americano.jpg', quantity: 1},
  {id: 3, name: 'Cappuccino', price: 3.50, item_type: 'Drink', img: '../../assets/menu-images/cappuccino.jpg', quantity: 1},
  {id: 4, name: 'Cortado', price: 3.50, item_type: 'Drink', img: '../../assets/menu-images/cortado.jpg', quantity: 1},
  {id: 5, name: 'Latte', price: 3.50, item_type: 'Drink', img: '../../assets/menu-images/latte.jpg', quantity: 1},
  {id: 6, name: 'Tea', price: 2.25, item_type: 'Drink', img: '../../assets/menu-images/tea.jpg', quantity: 1},
  {id: 7, name: 'Tea Latte', price: 3.50, item_type: 'Drink', img: '../../assets/menu-images/tea-latte.jpg', quantity: 1},
  {id: 8, name: 'Matcha Latte', price: 4.25, item_type: 'Drink', img: '../../assets/menu-images/matcha-latte.jpg', quantity: 1}
  // {id: 9, name: 'Coffee', price: 2.25, img: '../../assets/menu-images/drip-coffee.jpg', quantity: 0},
  // {id: 10, name: 'Coffee', price: 2.25, img: '../../assets/menu-images/drip-coffee.jpg', quantity: 0}
];

const EAT: Item[] = [
  {id: 9, name: 'Croissant', price: 2.50, item_type: 'Food', img: '../../assets/menu-images/croissant.jpg', quantity: 1},
  {id: 10, name: 'Choc. Croiss', price: 2.75, item_type: 'Food', img: '../../assets/menu-images/chocolate-croissant.jpg', quantity: 1},
  {id: 11, name: 'Bagel', price: 2.25, item_type: 'Food', img: '../../assets/menu-images/bagel.jpg', quantity: 1},
  {id: 12, name: 'Blueberry Oat', price: 3.50, item_type: 'Food', img: '../../assets/menu-images/blueberry-oatmeal.jpg', quantity: 1},
  {id: 13, name: 'Pump. Scone', price: 3.50, item_type: 'Food', img: '../../assets/menu-images/pumpkin-scone.jpg', quantity: 1},
  {id: 14, name: 'Bacon Gouda', price: 4.25, item_type: 'Food', img: '../../assets/menu-images/bacon-gouda.jpg', quantity: 1},
  {id: 15, name: 'Chorizo', price: 4.45, item_type: 'Food', img: '../../assets/menu-images/chorizo.jpg', quantity: 1},
  {id: 16, name: 'Sausage Egg', price: 4.25, item_type: 'Food', img: '../../assets/menu-images/sausage-egg.jpg', quantity: 1}
  // {id: 9, name: 'Coffee', price: 2.25, img: '../../assets/menu-images/drip-coffee.jpg', quantity: 0},
  // {id: 10, name: 'Coffee', price: 2.25, img: '../../assets/menu-images/drip-coffee.jpg', quantity: 0}
];
