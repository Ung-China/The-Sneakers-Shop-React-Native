import {Platform} from 'react-native';
import Screen_Dimensions from '../dimensions';

const Padding = {
  EXTRA_SMALL: 5,
  SMALL: 10,
  DEFAULT: 15,
  LARGE: 20,
  EXTRA_LARGE: 25,
  BOTTOM: Screen_Dimensions.HEIGHT > 812 && Platform.OS === 'ios' ? 15 : 0,
};

export default Padding;
