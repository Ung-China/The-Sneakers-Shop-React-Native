import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Radius,
  Screen_Dimensions,
  Spacing,
} from '../../constants';

export default StyleSheet.create({
  container: {flex: 1},
  contentContainerStyle: {
    padding: Padding.DEFAULT,
  },
  safeAreaStyle: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
  labelStyle: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  priceLabel: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  priceValue: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.MEDIUM,
  },
  priceContainerStyle: {
    paddingHorizontal: Padding.DEFAULT,
  },
  totalPriceContainer: {
    marginHorizontal: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    gap: Gap.DEFAULT,
    paddingVertical: Padding.DEFAULT,
  },
  shippingContainer: {
    padding: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    marginHorizontal: Spacing.DEFAULT,
    marginTop: Spacing.DEFAULT,
  },
  shippngHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  body: {
    paddingTop: Padding.SMALL,
    gap: Gap.EXTRA_SMALL,
  },
  shippingLabel: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.default,
  },
  shipping: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
  },
  separator: {
    height: 0.5,
    marginVertical: Padding.DEFAULT,
  },
  paymentContainer: {
    paddingHorizontal: Padding.DEFAULT,
    marginTop: Spacing.DEFAULT,
  },
  labelContainer: {
    gap: Gap.EXTRA_SMALL,
  },
  mainLabel: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  subLabel: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
  },
  optionContainer: {
    marginVertical: Spacing.DEFAULT,
    gap: Gap.DEFAULT,
  },
  optionContentContainer: {
    flexDirection: 'row',
    gap: Gap.DEFAULT,
  },
  uploadPayslip: {
    flex: 1,
    width: Screen_Dimensions.WIDTH - 30,
    height: 170,
    borderRadius: Radius.DEFAULT,
    marginVertical: Spacing.DEFAULT,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Gap.SMALL,
    zIndex: 1,
  },
  successContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.SMALL,
  },
  uploadLabel: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
    textAlign: 'center',
  },
  reUpload: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
    textAlign: 'center',
  },
  payslip: {
    width: Screen_Dimensions.WIDTH - 30,
    height: 170,
    position: 'absolute',
    zIndex: -1,
    borderRadius: Radius.DEFAULT,
    marginVertical: Spacing.DEFAULT,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
});
