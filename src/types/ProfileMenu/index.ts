import {TextStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface ProfileMenuItemProps {
  item: {
    screenName?: string;
    label?: string;
    prefixIcon?: React.FC<SvgProps>;
    suffixIcon?: React.FC<SvgProps>;
    isDanger?: boolean;
    isSwitch?: boolean;
  };
  labelStyle?: TextStyle;
}
