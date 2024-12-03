export default class Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isFavorite: boolean;
  galleries: string[];
  variants: string | [];
  promotion: number;

  constructor(
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    isFavorite: boolean,
    galleries: string[],
    variants: string | [],
    promotion: number,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.isFavorite = isFavorite;
    this.galleries = galleries;
    this.variants = variants;
    this.promotion = promotion;
  }
}

export const products: Product[] = [
  new Product(
    1,
    'Lipstick Classic Red',
    15.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    true,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    10,
  ),
  new Product(
    2,
    'Foundation Matte Finish',
    25.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    false,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    15,
  ),
  new Product(
    3,
    'Eyeliner Black Precision',
    9.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    true,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    0,
  ),
  new Product(
    4,
    'Blush Natural Glow',
    12.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    false,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    5,
  ),
  new Product(
    5,
    'Mascara Volume Boost',
    18.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    true,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    20,
  ),
  new Product(
    6,
    'Blush Natural Glow',
    12.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    false,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    5,
  ),
  new Product(
    7,
    'Blush Natural Glow',
    12.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    false,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    5,
  ),
  new Product(
    8,
    'Blush Natural Glow',
    12.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    false,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    5,
  ),
  new Product(
    9,
    'Blush Natural Glow',
    12.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    false,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    5,
  ),
  new Product(
    10,
    'Blush Natural Glow',
    12.99,
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    false,
    [
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
      'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    ],
    [],
    5,
  ),
];
