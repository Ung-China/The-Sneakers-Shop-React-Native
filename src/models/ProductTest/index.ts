export default class ProductTest {
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

export const producttestes: ProductTest[] = [
  new ProductTest(
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
  new ProductTest(
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
  new ProductTest(
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
  new ProductTest(
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
  new ProductTest(
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
  new ProductTest(
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
  new ProductTest(
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
  new ProductTest(
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
  new ProductTest(
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
  new ProductTest(
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
