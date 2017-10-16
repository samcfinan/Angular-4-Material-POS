export class Item {
  id: number;
  name: string;
  price: number;
  img: String;
  quantity: number;
}

export class Order {
  orderNumber: string;
  items: Item[];
  cartTotal: number;
  cartNumItems: number;

  constructor(num: string, items: Item[], total: number, numItems: number) {
    this.orderNumber = num;
    this.items = items;
    this.cartTotal = total;
    this.cartNumItems = numItems;
  }
}
