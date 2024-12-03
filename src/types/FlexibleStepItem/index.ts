import {SvgProps} from 'react-native-svg';

export interface FlexibleStepItem {
  item: {
    id: number;
    date: number | null;
    icon: React.FC<SvgProps>;
    title: string;
    description: string;
  };
  lastIndex: boolean;
}
