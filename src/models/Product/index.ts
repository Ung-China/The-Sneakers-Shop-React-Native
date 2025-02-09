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
