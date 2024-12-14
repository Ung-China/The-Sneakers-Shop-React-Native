import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.DEFAULT,
    padding: Padding.DEFAULT - 5,
    borderRadius: Radius.DEFAULT,
  },
  body: {
    gap: Gap.EXTRA_SMALL,
  },
  label: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  streetLine: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
  },
});
