export default class Address {
  id: number;
  country: string;
  label: string[];
  phoneNumber: string;
  streetLine1: string;
  streetLine2: string;
  city: string[];
  note: string;

  constructor(
    id: number,
    country: string,
    label: string[],
    phoneNumber: string,
    streetLine1: string,
    streetLine2: string,
    city: string[],
    note: string,
  ) {
    this.id = id;
    this.country = country;
    this.label = label;
    this.phoneNumber = phoneNumber;
    this.streetLine1 = streetLine1;
    this.streetLine2 = streetLine2;
    this.city = city;
    this.note = note;
  }
}

export const addresss: Address[] = [
  new Address(
    1,
    'Cambodia',
    ['Home', 'Office'],
    '+85512345678',
    'House #12, Street 123',
    'Sangkat Toul Tom Poung',
    ['Phnom Penh'],
    'Near Russian Market',
  ),
  new Address(
    2,
    'Cambodia',
    ['Warehouse'],
    '+85598765432',
    'Building #88, Street 456',
    'Sangkat Chroy Changvar',
    ['Phnom Penh'],
    'Opposite Sokha Hotel',
  ),
  new Address(
    3,
    'Cambodia',
    ['Vacation Home'],
    '+85591234567',
    'Borey Villa, Street 789',
    'Kep City',
    ['Kep'],
    'Beachside property',
  ),
  new Address(
    4,
    'Cambodia',
    ['Vacation Home'],
    '+85591234567',
    'Borey Villa, Street 789',
    'Kep City',
    ['Kep'],
    'Beachside property',
  ),
  new Address(
    5,
    'Cambodia',
    ['Vacation Home'],
    '+85591234567',
    'Borey Villa, Street 789',
    'Kep City',
    ['Kep'],
    'Beachside property',
  ),
];
