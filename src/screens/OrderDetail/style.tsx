import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Padding.DEFAULT,
  },
  priceContainer: {
    marginHorizontal: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    gap: Gap.DEFAULT,
    paddingVertical: Padding.DEFAULT,
  },
  priceContainerStyle: {
    paddingHorizontal: Padding.DEFAULT,
  },
  paddingTop: {
    paddingTop: Padding.DEFAULT,
  },
  priceLabel: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  priceValue: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.MEDIUM,
  },
  checkoutItemContentContainer: {
    paddingHorizontal: Padding.DEFAULT,
    paddingBottom: Padding.DEFAULT,
  },
  totalPriceContainer: {
    marginHorizontal: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    gap: Gap.DEFAULT,
    paddingVertical: Padding.DEFAULT,
  },
  titleStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.extraLarge,
    paddingVertical: Padding.DEFAULT,
  },
  trackingContainer: {
    marginBottom: Padding.DEFAULT * 2,
    paddingBottom: Padding.BOTTOM,
  },
});
