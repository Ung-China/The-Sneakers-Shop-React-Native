import {Platform, StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    gap: Gap.SMALL,
  },
  textInput: {
    flex: 1,
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
    paddingVertical:
      Platform.OS === 'android' ? Spacing.DEFAULT - 3 : Spacing.DEFAULT,
  },
  placeHolder: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  label: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  error: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
    color: 'red',
  },
});
