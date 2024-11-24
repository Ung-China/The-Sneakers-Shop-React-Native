export default class Variant {
  id: number;
  size: string;
  price: number;
  constructor(id: number, size: string, price: number) {
    this.id = id;
    this.size = size;
    this.price = price;
  }
}
export const variants: Variant[] = [
  new Variant(1, '33US', 120),
  new Variant(2, '35US', 120),
  new Variant(3, '36US', 120),
  new Variant(4, '37US', 120),
  new Variant(5, '38US', 120),
  new Variant(6, '33US', 120),
  new Variant(7, '35US', 120),
  new Variant(8, '36US', 120),
  new Variant(9, '37US', 120),
  new Variant(10, '38US', 120),
];
