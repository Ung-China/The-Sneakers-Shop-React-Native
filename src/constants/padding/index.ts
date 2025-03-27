import {Platform} from 'react-native';
import Screen_Dimensions from '../dimensions';

const Padding = {
  EXTRA_SMALL: 5,
  SMALL: 10,
  DEFAULT: 15,
  LARGE: 20,
  EXTRA_LARGE: 25,
  BOTTOM: Screen_Dimensions.HEIGHT > 812 && Platform.OS === 'ios' ? 30 : 15,
  TOP: Screen_Dimensions.HEIGHT > 812 && Platform.OS === 'ios' ? 50 : 0,
};

export default Padding;
