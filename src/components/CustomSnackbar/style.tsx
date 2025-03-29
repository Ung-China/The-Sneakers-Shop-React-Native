import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Padding, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    paddingBottom: Padding.BOTTOM,
  },
  text: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
    color: 'white',
    paddingHorizontal: Padding.DEFAULT,
    paddingTop: Padding.DEFAULT,
  },
});
