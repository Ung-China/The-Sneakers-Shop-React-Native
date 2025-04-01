import {SvgProps} from 'react-native-svg';
import {Icons} from '../../constants';

export default class PaymentMethod {
  id: number;
  name: string;
  number: string;
  accountName: string;
  value: string;
  prefixIcon: React.FC<SvgProps>;

  constructor(
    id: number,
    name: string,
    number: string,
    accountName: string,
    value: string,
    prefixIcon: React.FC<SvgProps>,
  ) {
    this.id = id;
    this.name = name;
    this.number = number;
    this.accountName = accountName;
    this.value = value;
    this.prefixIcon = prefixIcon;
  }
}

export const dummyPaymentMethods: PaymentMethod[] = [
  new PaymentMethod(
    1,
    'ABA Bank',
    '001 904 779',
    'Ung China',
    'aba',
    Icons.ABABANK,
  ),
  new PaymentMethod(
    2,
    'ACLEDA Bank',
    '001 904 779',
    'Ung China',
    'acleda',
    Icons.ACLEDABANK,
  ),
  new PaymentMethod(
    3,
    'WING Bank',
    '001 904 779',
    'Ung China',
    'wing',
    Icons.WINGBANK,
  ),
];
