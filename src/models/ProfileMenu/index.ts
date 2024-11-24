import {SvgProps} from 'react-native-svg';

export default class ProfileMenu {
  id: number;
  screenName?: string;
  prefixIcon?: React.FC<SvgProps>;
  label?: string;
  suffixIcon?: React.FC<SvgProps>;
  isDanger?: boolean;
  isSwitch?: boolean;

  constructor(
    id: number,
    screenName: string,
    prefixIcon?: React.FC<SvgProps>,
    label?: string,
    suffixIcon?: React.FC<SvgProps>,
    isDanger: boolean = false,
    isSwitch: boolean = false,
  ) {
    this.id = id;
    this.screenName = screenName;
    this.prefixIcon = prefixIcon;
    this.label = label;
    this.suffixIcon = suffixIcon;
    this.isDanger = isDanger;
    this.isSwitch = isSwitch;
  }
}
