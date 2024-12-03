export default class Order {
  id: number;
  orderNumber: string;
  orderDate: string;
  status: string;
  totalAmount: number;

  constructor(
    id: number,
    orderNumber: string,
    orderDate: string,
    status: string,
    totalAmount: number,
  ) {
    this.id = id;
    this.orderNumber = orderNumber;
    this.orderDate = orderDate;
    this.status = status;
    this.totalAmount = totalAmount;
  }
}

export const orders: Order[] = [
  new Order(1, '#00001', '2024-08-24', 'Pending', 100),
  new Order(2, '#00001', '2024-08-24', 'Pending', 100),
  new Order(3, '#00001', '2024-08-24', 'Pending', 100),
  new Order(4, '#00001', '2024-08-24', 'Pending', 100),
  new Order(5, '#00001', '2024-08-24', 'Pending', 100),
  new Order(6, '#00001', '2024-08-24', 'Pending', 100),
  new Order(7, '#00001', '2024-08-24', 'Pending', 100),
  new Order(8, '#00001', '2024-08-24', 'Pending', 100),
  new Order(9, '#00001', '2024-08-24', 'Pending', 100),
  new Order(10, '#00001', '2024-08-24', 'Pending', 100),
  new Order(11, '#00001', '2024-08-24', 'Pending', 100),
  new Order(12, '#00001', '2024-08-24', 'Pending', 100),
];
