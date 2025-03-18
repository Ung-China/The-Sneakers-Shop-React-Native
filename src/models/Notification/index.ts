export default class Notification {
  id: number;
  title: string;
  description: string;
  images: string[];
  amount: number;
  percent: number;
  discountType?: 'amount' | 'percent' | null;
  promotionType?: 'product' | 'brand';
  brands?: {id: number}[];
  products?: {id: number}[];

  constructor(
    id: number,
    title: string,
    description: string,
    images: string[],
    amount: number,
    percent: number,
    promotionType?: 'product' | 'brand',
    discountType?: 'amount' | 'percent',
    brands?: {id: number}[],
    products?: {id: number}[],
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.images = images;
    this.promotionType = promotionType;
    this.discountType = discountType;
    this.amount = amount;
    this.percent = percent;
    this.brands = brands || [];
    this.products = products || [];
  }
}

export const dummyNotifications: Notification[] = [
  new Notification(
    1,
    'System Update',
    'Our system will undergo maintenance from 2:00 AM to 4:00 AM.',
    [],
    10,
    10,
  ),
  new Notification(
    2,
    'New Feature Released',
    'Check out our new dark mode feature in the settings.',
    [],
    10,
    10,
  ),
  new Notification(
    3,
    'Limited Time Offer',
    'Get 20% off on your next purchase. Offer valid till March 15.',
    [],
    10,
    10,
  ),
  new Notification(
    4,
    'Account Security Alert',
    'Unusual login detected from a new device.',
    [],
    10,
    10,
  ),
  new Notification(
    5,
    'Event Invitation',
    'Join our live webinar on product updates this Friday.',
    [],
    10,
    10,
  ),
  new Notification(
    6,
    'Subscription Renewal',
    'Your subscription will expire soon. Renew now to continue uninterrupted service.',
    [],
    10,
    10,
  ),
];
