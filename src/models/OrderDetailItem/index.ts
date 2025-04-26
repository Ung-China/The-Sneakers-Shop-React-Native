export default class OrderDetailItem {
  id: number;
  orderId: number;
  productId: number;
  brandId: number;
  quantity: number;
  size: string;
  price: string;
  discount: string;
  discountType: string;
  imageUrl: string;

  constructor(data: {
    id: number;
    order_id: number;
    product_id: number;
    brand_id: number;
    product_qty: number;
    product_size: string;
    product_price: string;
    discount: string;
    discount_type: string;
    image_url: string;
  }) {
    this.id = data.id;
    this.orderId = data.order_id;
    this.productId = data.product_id;
    this.brandId = data.brand_id;
    this.quantity = data.product_qty;
    this.size = data.product_size;
    this.price = data.product_price;
    this.discount = data.discount;
    this.discountType = data.discount_type;
    this.imageUrl = data.image_url;
  }
}
