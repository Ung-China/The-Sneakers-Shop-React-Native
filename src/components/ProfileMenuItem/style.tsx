import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  leadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  label: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
});
