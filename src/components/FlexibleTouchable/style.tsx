import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  wrapper: {},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  leadingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  label: {
    flex: 1,
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
});
