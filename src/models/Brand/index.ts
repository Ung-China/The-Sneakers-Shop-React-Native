export default class Brand {
  id: number;
  name: string;
  image: string;

  constructor(id: number, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}

export const dummyBrands: Brand[] = [
  new Brand(
    1,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
  new Brand(
    2,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
  new Brand(
    3,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
  new Brand(
    4,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
  new Brand(
    5,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
];
