import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const isTablet = width >= 768;

const FontSizes = {
  extraSmall: isTablet ? 20 : width >= 1300 ? 14 : 10,
  small: isTablet ? 22 : width >= 1300 ? 16 : 12,
  default: isTablet ? 24 : width >= 1300 ? 18 : 14,
  large: isTablet ? 26 : width >= 1300 ? 20 : 16,
  extraLarge: isTablet ? 28 : width >= 1300 ? 22 : 18,
  overLarge: isTablet ? 34 : width >= 1300 ? 28 : 24,
};

export default FontSizes;
