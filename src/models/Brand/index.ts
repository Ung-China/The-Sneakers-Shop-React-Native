export default class Brand {
  id: number;
  name: string;
  imageUrl: string;

  constructor(id: number, name: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}

export const brands: Brand[] = [
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
  new Brand(
    6,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
  new Brand(
    7,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
  new Brand(
    8,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
  new Brand(
    9,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
  new Brand(
    10,
    'Adidas',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  ),
];
