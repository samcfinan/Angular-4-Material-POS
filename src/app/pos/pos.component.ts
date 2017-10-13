import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  menu = MENU;
  @Output() onItemSelect = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  addToCheck(item: Item) {
    this.onItemSelect.emit(item);
  }

}

const MENU: Item[] = [
  {id: 1, name: 'Drip Coffee', price: 2.25, img: '../../assets/menu-images/drip-coffee.jpg', quantity: 0},
  {id: 2, name: 'Americano', price: 3.15, img: '../../assets/menu-images/americano.png', quantity: 0},
  {id: 3, name: 'Cappuccino', price: 3.50, img: '../../assets/menu-images/cappuccino.jpg', quantity: 0},
  {id: 4, name: 'Cortado', price: 3.50, img: '../../assets/menu-images/cortado.jpg', quantity: 0},
  {id: 5, name: 'Latte', price: 3.50, img: '../../assets/menu-images/latte.jpg', quantity: 0},
  {id: 6, name: 'Tea', price: 2.25, img: '../../assets/menu-images/tea.jpg', quantity: 0},
  {id: 7, name: 'Tea Latte', price: 3.50, img: '../../assets/menu-images/tea-latte.jpg', quantity: 0},
  {id: 8, name: 'Matcha Latte', price: 4.25, img: '../../assets/menu-images/matcha-latte.jpg', quantity: 0}
  // {id: 9, name: 'Coffee', price: 2.25, img: '../../assets/menu-images/drip-coffee.jpg', quantity: 0},
  // {id: 10, name: 'Coffee', price: 2.25, img: '../../assets/menu-images/drip-coffee.jpg', quantity: 0}
];
