export default class Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  image: string;
  open: string;
  close: string;
  shopLocation: string;

  constructor(
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    image: string,
    open: string,
    close: string,
    shopLocation: string,
  ) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.image = image;
    this.open = open;
    this.close = close;
    this.shopLocation = shopLocation;
  }
}

export const locations: Location[] = [
  new Location(
    1,
    'The Sneakers Shop 1',
    13.379637,
    103.866866,
    'https://cdn.myportfolio.com/bdf7d228ed9316ad0deaee5a3e8f6cd0/1d4ea287-5b16-44d8-8374-9a1d2c01cd34_rw_1920.jpg?h=a30b5fe00daa5947ccd5b4dfed5cb310',
    '09:00 AM',
    '09:00 PM',
    'ផ្ទះ លេខ ២២២ , ផ្លូវជាតិ លេខ ៦ ស្លក្រាម, ក្រុង សៀមរាប ខេត្ត សៀមរាប',
  ),
];
