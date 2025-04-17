import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding} from '../../constants';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    padding: Padding.DEFAULT,
    gap: Gap.DEFAULT,
  },
  labelStyle: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  title: {
    fontSize: FontSizes.overLarge,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
  },
  description: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
  },
});
