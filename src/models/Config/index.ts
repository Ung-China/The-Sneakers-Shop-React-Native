import Contact from '../Contact';
import ShopAddress from '../ShopAddress';

export default class Config {
  deliveryFee: number;
  shopAddress: ShopAddress[];
  contacts: Contact[];
  constructor(config: any) {
    this.deliveryFee = Number(config.delivery_fee);
    this.contacts = (config.social_media || []).map(
      (item: any) => new Contact(item),
    );
    this.shopAddress = [
      new ShopAddress({
        id: 1,
        name: config.company_name,
        address: config.company_address,
        open: config.open,
        close: config.close,
        latitude: config.latitude,
        longitude: config.longitude,
        image: config.shop_image,
      }),
    ];
  }
}
