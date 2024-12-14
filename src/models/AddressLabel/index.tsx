export default class AddressLabel {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const addressLabels: AddressLabel[] = [
  new AddressLabel(1, 'Home'),
  new AddressLabel(2, 'Work'),
  new AddressLabel(3, 'Partner'),
  new AddressLabel(4, 'Other'),
];
