import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.DEFAULT,
  },
  notFound: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
    width: '80%',
    textAlign: 'center',
    lineHeight: Spacing.EXTRA_LARGE,
  },
});
