export default class Logistic {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
export const logistics: Logistic[] = [
  new Logistic(1, 'VET Express'),
  new Logistic(2, 'J&T Express'),
  new Logistic(3, 'Capitol Express'),
];
