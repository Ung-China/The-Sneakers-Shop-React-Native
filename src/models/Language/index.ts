import {SvgProps} from 'react-native-svg';

export default class Language {
  id: number;
  name?: string;
  code?: string;
  prefixIcon?: React.FC<SvgProps>;
  suffixIcon?: React.FC<SvgProps>;

  constructor(
    id: number,
    name: string,
    code?: string,
    prefixIcon?: React.FC<SvgProps>,
    suffixIcon?: React.FC<SvgProps>,
  ) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.prefixIcon = prefixIcon;
    this.suffixIcon = suffixIcon;
  }
}
