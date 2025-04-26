export default class OrderDetail {
  id: number;
  orderNumber: string;
  orderstatus: string;
  paymentStatus: string;
  orderDate: string;
  total: string;
  finalTotal: string;
  discount: string;
  deliveryFee: string;

  constructor(id: number) {
    this.id = id;
  }
}
