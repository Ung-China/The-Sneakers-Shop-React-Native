export default class ShopAddress {
  id: number;
  name: string;
  address: string;
  open: string;
  close: string;
  latitude: string;
  longitude: string;
  image: string;

  constructor(data: {
    id: number;
    name: string;
    address: string;
    open: string;
    close: string;
    latitude: string;
    longitude: string;
    image: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.address = data.address;
    this.open = data.open;
    this.close = data.close;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.image = data.image;
  }
}
