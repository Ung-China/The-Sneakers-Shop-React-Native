import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    gap: Gap.EXTRA_SMALL,
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  description: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
  },
});
