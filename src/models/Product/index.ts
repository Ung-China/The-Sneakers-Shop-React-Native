import Variant from '../Variant';

export default class Product {
  id: number;
  name: string;
  price: string;
  rating: string;
  image: string;
  description?: string;
  images?: string[];
  variants?: Variant[];
  brandId?: number;

  constructor(
    id: number,
    name: string,
    price: string,
    rating: string,
    image: string,
    description?: string,
    images?: string[],
    variants?: Variant[],
    brandId?: number,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.image = image;
    this.description = description;
    this.images = images;
    this.variants = variants;
    this.brandId = brandId;
  }
}

export const dummyProducts: Product[] = [
  new Product(
    1,
    'Nike Air Max 270',
    '149.99',
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    [],
    101,
  ),
  new Product(
    2,
    'Nike Air Max 270',
    '149.99',
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    [],
    101,
  ),
  new Product(
    3,
    'Nike Air Max 270',
    '149.99',
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    [],
    101,
  ),
  new Product(
    4,
    'Nike Air Max 270',
    '149.99',
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    [],
    101,
  ),
  new Product(
    5,
    'Nike Air Max 270',
    '149.99',
    '4.7',
    '',
    'A stylish and comfortable sneaker with a modern design.',
    [],
    [],
    101,
  ),
];
