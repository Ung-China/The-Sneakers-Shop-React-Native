import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius, Spacing} from '../../constants';
import {colors} from '../../constants/colors/colorTypes';

export default StyleSheet.create({
  wrapper: {
    width: 160,
    borderRadius: Radius.DEFAULT,
  },
  container: {
    borderRadius: Radius.DEFAULT,
    padding: Padding.EXTRA_SMALL,
  },
  imageStyle: {
    height: 140,
    width: null,
    borderRadius: Radius.DEFAULT,
  },
  loadingImagestyle: {
    backgroundColor: colors.white,
    height: 140,
  },
  name: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  hero: {
    paddingTop: Padding.EXTRA_SMALL,
    gap: Gap.EXTRA_SMALL,
  },
  heroFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addToCart: {
    padding: Padding.EXTRA_SMALL - 4,
    borderRadius: Radius.EXTRA_LARGE,
  },
  heartButton: {
    position: 'absolute',
    right: 0,
    padding: Padding.EXTRA_SMALL,
    borderRadius: Radius.EXTRA_LARGE,
    margin: Spacing.SMALL,
  },
  promotionContainer: {
    position: 'absolute',
    left: 0,
    margin: Spacing.SMALL,
  },
  promotionWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  value: {
    color: 'white',
    fontSize: FontSizes.extraSmall,
    fontFamily: Fonts.REGULAR,
    lineHeight: 10,
  },
  discountText: {
    color: 'white',
    fontSize: FontSizes.extraSmall,
    fontFamily: Fonts.REGULAR,
    lineHeight: 10,
  },
  leftContainer: {
    height: 28,
    width: '100%',
    borderBottomLeftRadius: Radius.DEFAULT,
    borderBottomRightRadius: Radius.DEFAULT,
  },
  left: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: Padding.EXTRA_SMALL,
  },
});
