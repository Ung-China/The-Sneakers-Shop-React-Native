export default class Variant {
  id: number;
  size: string;
  price: number;
  quantity: number;

  constructor(id: number, size: string, price: number, quantity: number) {
    this.id = id;
    this.size = size;
    this.price = price;
    this.quantity = quantity;
  }
}

export const variants: Variant[] = [
  new Variant(1, '33US', 120, 1),
  new Variant(2, '35US', 120, 1),
  new Variant(3, '36US', 120, 1),
  new Variant(4, '37US', 120, 1),
  new Variant(5, '38US', 120, 1),
  new Variant(6, '38US', 120, 1),
];
