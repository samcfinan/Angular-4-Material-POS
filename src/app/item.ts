export interface Item {
  id?: number;
  name: string;
  price: number;
  item_type: string;
  img?: String;
  quantity?: number;
}

export interface Order {
  orderNumber: string;
  items?: Item[];
  cartTotal: number;
  cartNumItems?: number;
}
