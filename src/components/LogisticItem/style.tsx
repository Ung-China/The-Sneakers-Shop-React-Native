import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Padding,
  Radius,
  Screen_Dimensions,
} from '../../constants';

export default StyleSheet.create({
  container: {
    padding: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    width: Screen_Dimensions.WIDTH / 2 - 22.5,
  },
  name: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
  },
});
