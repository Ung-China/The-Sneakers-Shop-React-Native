export default class Notification {
  id: number;
  title: string;
  description: string;
  images: string[];
  discountType?: 'amount' | 'percent' | null;
  promotionType?: 'product' | 'brand';
  amount?: number;
  percent?: number;
  brands?: {id: number}[];
  products?: {id: number}[];

  constructor(
    id: number,
    title: string,
    description: string,
    images: string[],
    promotionType?: 'product' | 'brand',
    discountType?: 'amount' | 'percent',
    amount?: number,
    percent?: number,
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
  ),
  new Notification(
    2,
    'New Feature Released',
    'Check out our new dark mode feature in the settings.',
    [],
  ),
  new Notification(
    3,
    'Limited Time Offer',
    'Get 20% off on your next purchase. Offer valid till March 15.',
    [],
  ),
  new Notification(
    4,
    'Account Security Alert',
    'Unusual login detected from a new device.',
    [],
  ),
  new Notification(
    5,
    'Event Invitation',
    'Join our live webinar on product updates this Friday.',
    [],
  ),
  new Notification(
    6,
    'Subscription Renewal',
    'Your subscription will expire soon. Renew now to continue uninterrupted service.',
    [],
  ),
];
