import {SvgProps} from 'react-native-svg';

export interface PaymentMethodProps {
  onPress: () => void;
  item: {
    id: number;
    name: string;
    number: string;
    accountName: string;
    value: string;
    prefixIcon: React.FC<SvgProps>;
  };
  isActive: boolean;
}
