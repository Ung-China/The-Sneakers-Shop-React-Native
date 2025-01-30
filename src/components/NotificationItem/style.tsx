import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius, Spacing} from '../../constants';
import {colors} from '../../constants/colors/colorTypes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.DEFAULT,
    padding: Padding.SMALL,
    gap: Gap.SMALL,
  },
  imageStyle: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: Radius.DEFAULT,
  },
  loadingImagestyle: {
    backgroundColor: colors.white,
    height: 90,
  },
  title: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.MEDIUM,
  },
  description: {
    fontSize: FontSizes.default,
    fontFamily: Fonts.REGULAR,
    lineHeight: Spacing.LARGE,
  },
  heroContainer: {
    flex: 1,
    gap: Gap.EXTRA_SMALL,
  },
});
