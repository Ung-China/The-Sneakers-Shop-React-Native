import {SvgProps} from 'react-native-svg';

export interface LanguageItemProps {
  id: number;
  code: string;
  name: string;
  prefixIcon?: React.FC<SvgProps>;
}
