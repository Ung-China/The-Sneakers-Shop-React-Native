import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding.DEFAULT,
    paddingVertical: Padding.SMALL,
    borderRadius: Radius.DEFAULT,
  },
  name: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
});
