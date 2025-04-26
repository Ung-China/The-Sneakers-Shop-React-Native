export default class OrderDetailItem {
  id: number;
  name: string;
  orderId: number;
  productId: number;
  brandId: number;
  quantity: number;
  size: string;
  price: number;
  discount: number;
  discountType: string;
  imageUrl: string;

  constructor(data: {
    id: number;
    product_name: string;
    order_id: number;
    product_id: number;
    brand_id: number;
    product_qty: number;
    product_size: string;
    product_price: number;
    discount: number;
    discount_type: string;
    image_url: string;
  }) {
    this.id = data.id;
    this.name = data.product_name;
    this.orderId = data.order_id;
    this.productId = data.product_id;
    this.brandId = data.brand_id;
    this.quantity = data.product_qty;
    this.size = data.product_size;
    this.price = Number(data.product_price);
    this.discount = Number(data.discount);
    this.discountType = data.discount_type;
    this.imageUrl = data.image_url;
  }
}
