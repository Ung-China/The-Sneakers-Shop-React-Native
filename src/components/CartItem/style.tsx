import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts, FontSizes, Gap, Padding, Radius, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Padding.SMALL,
    borderRadius: Radius.DEFAULT,
    gap: Gap.SMALL,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: Radius.DEFAULT,
  },
  loadingImagestyle: {
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: Radius.DEFAULT,
  },
  rightActionContainer: {
    flex: 1,
    padding: Padding.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: Radius.DEFAULT,
  },
  name: {
    flex: 1,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  size: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  price: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  hero: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.SMALL,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promotionContainer: {
    position: 'absolute',
    left: -7,
    top: -7,
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
});
