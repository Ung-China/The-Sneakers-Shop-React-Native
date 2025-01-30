export default class Product {
  id: number;
  name: string;
  price: number;
  rating: string;
  image: string;

  constructor(
    id: number,
    name: string,
    price: number,
    rating: string,
    image: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.image = image;
  }
}
