import Variant from '../Variant';

export default class Product {
  id: number;
  name: string;
  price: number;
  rating: string;
  image: string;
  description?: string;
  images?: string[];
  brandId?: number;
  variants?: Variant[];

  constructor(
    id: number,
    name: string,
    price: number,
    rating: string,
    image: string,
    description?: string,
    images?: string[],
    brandId?: number,
    variants?: Variant[],
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.image = image;
    this.description = description;
    this.images = images;
    this.brandId = brandId;
    this.variants = variants;
  }
}

export const dummyProducts: Product[] = [
  new Product(
    1,
    'Nike Air Max 270',
    144,
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    101,
    [],
  ),
  new Product(
    2,
    'Nike Air Max 270',
    144,
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    101,
    [],
  ),
  new Product(
    3,
    'Nike Air Max 270',
    144,
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    101,
    [],
  ),
  new Product(
    4,
    'Nike Air Max 270',
    144,
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    101,
    [],
  ),
  new Product(
    5,
    'Nike Air Max 270',
    144,
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    101,
    [],
  ),
  new Product(
    6,
    'Nike Air Max 270',
    144,
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    101,
    [],
  ),
  new Product(
    7,
    'Nike Air Max 270',
    144,
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    101,
    [],
  ),
  new Product(
    8,
    'Nike Air Max 270',
    144,
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    101,
    [],
  ),
];
