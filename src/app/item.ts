export interface Item {
  id?: number;
  name: string;
  price: number;
  img?: String;
  quantity?: number;
}

export interface Order {
  orderNumber: string;
  items?: Item[];
  cartTotal: number;
  cartNumItems?: number;
}
