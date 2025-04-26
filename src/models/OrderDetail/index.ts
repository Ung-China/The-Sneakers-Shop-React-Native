import OrderDetailItem from '../OrderDetailItem';

export default class OrderDetail {
  id: number;
  orderNumber: string;
  orderStatus: string | null;
  paymentStatus: string;
  orderDate: string;
  total: number;
  finalTotal: number;
  discount: number;
  deliveryFee: number;
  deliveryType: string;
  details: OrderDetailItem[];

  constructor(order: any) {
    this.id = Number(order.id);
    this.orderNumber = order.invoice_ref;
    this.orderStatus = order.order_status;
    this.paymentStatus = order.payment_status;
    this.orderDate = order.created_at;
    this.total = Number(order.order_amount);
    this.finalTotal = Number(order.final_total);
    this.discount = Number(order.discount_amount);
    this.deliveryFee = Number(order.delivery_fee);
    this.deliveryType = order.delivery_type;
    this.details =
      order.details?.map((item: any) => new OrderDetailItem(item)) ?? [];
  }
}
