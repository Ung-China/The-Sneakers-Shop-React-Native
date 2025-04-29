export default class CartItem {
  id: number;
  brandId: number;
  name: string;
  image: string;
  price: number;
  variantName: string;
  variantId: number | null;
  quantity: number;
  discountType: string | null;
  discount: number;
  stock: number;

  constructor(
    id: number,
    brandId: number,
    name: string,
    image: string,
    price: number,
    variantName: string,
    variantId: number | null,
    quantity: number,
    discountType: string,
    discount: number,
    stock: number,
  ) {
    this.id = id;
    this.brandId = brandId;
    this.name = name;
    this.image = image;
    this.price = price;
    this.variantName = variantName;
    this.variantId = variantId;
    this.quantity = quantity;
    this.discountType = discountType;
    this.discount = discount;
    this.stock = stock;
  }
}

export const cartItems: CartItem[] = [
  new CartItem(
    1,
    101,
    'Lipstick Classic Red',
    'https://example.com/images/lipstick-red.png',
    15.99,
    'Matte Finish',
    1,
    2,
    '',
    1,
  ),
  new CartItem(
    2,
    102,
    'Lipstick Nude Pink',
    'https://example.com/images/lipstick-nude.png',
    12.99,
    'Glossy Finish',
    2,
    1,
    '',
    1,
  ),
  new CartItem(
    3,
    103,
    'Lipstick Deep Wine',
    'https://example.com/images/lipstick-wine.png',
    18.99,
    'Velvet Finish',
    3,
    3,
    '',
    1,
  ),
  new CartItem(
    4,
    101,
    'Lipstick Coral Bliss',
    'https://example.com/images/lipstick-coral.png',
    14.49,
    'Creamy Finish',
    4,
    1,
    '',
    1,
  ),
  new CartItem(
    5,
    104,
    'Lipstick Dark Plum',
    'https://example.com/images/lipstick-plum.png',
    17.99,
    'Long-lasting',
    5,
    2,
    '',
    1,
  ),
  new CartItem(
    6,
    105,
    'Lipstick Peachy Glow',
    'https://example.com/images/lipstick-peach.png',
    13.99,
    'Hydrating Finish',
    6,
    1,
    '',
    1,
  ),
];
