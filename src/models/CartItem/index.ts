import Variant, {variants} from '../Variant';
export default class CartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  variant?: Variant;
  constructor(
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    variant: Variant,
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.variant = variant;
  }
}

export const cartItems: CartItem[] = [
  new CartItem(
    1,
    'Lipstick Classic Red',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    15.99,
    variants[0],
  ),
  new CartItem(
    2,
    'Lipstick Classic Red',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    15.99,
    variants[0],
  ),
  new CartItem(
    3,
    'Lipstick Classic Red',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    15.99,
    variants[0],
  ),
  new CartItem(
    4,
    'Lipstick Classic Red',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    15.99,
    variants[0],
  ),
  new CartItem(
    5,
    'Lipstick Classic Red',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    15.99,
    variants[0],
  ),
  new CartItem(
    6,
    'Lipstick Classic Red',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    15.99,
    variants[0],
  ),
];
