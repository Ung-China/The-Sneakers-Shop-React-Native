import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  name: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
});
