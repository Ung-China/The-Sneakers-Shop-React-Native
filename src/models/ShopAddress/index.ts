export default class ShopAddress {
  id: number;
  name: string;
  address: string;
  open: string;
  close: string;
  latitude: number;
  longitude: number;
  image: string;

  constructor(data: {
    id: number;
    name: string;
    address: string;
    open: string;
    close: string;
    latitude: number;
    longitude: number;
    image: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.address = data.address;
    this.open = data.open;
    this.close = data.close;
    this.latitude = Number(data.latitude);
    this.longitude = Number(data.longitude);
    this.image = data.image;
  }
}
