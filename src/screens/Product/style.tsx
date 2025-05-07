import {Platform, StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Radius,
  Screen_Dimensions,
  Spacing,
} from '../../constants';
import {colors} from '../../constants/colors/colorTypes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperImageStyle: {
    height: 400,
  },
  swiperContainer: {
    height: 400,
  },
  swiperLoadingImageStyle: {
    height: 400,
  },
  backContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 20,
    left: 15,
  },
  cartContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 20,
    right: +15,
  },
  body: {
    flex: 1,
    gap: Gap.SMALL,
  },
  container1: {
    padding: Padding.DEFAULT,
    gap: Gap.DEFAULT,
  },
  container2: {
    gap: Gap.DEFAULT,
    padding: Padding.DEFAULT,
  },
  container3: {
    gap: Gap.DEFAULT,
    paddingBottom: Padding.DEFAULT,
  },
  name: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.extraLarge,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heartContainer: {
    position: 'absolute',
    right: +Spacing.DEFAULT,
    top: +Spacing.DEFAULT,
    padding: Padding.EXTRA_SMALL + 2,
    borderRadius: Radius.EXTRA_LARGE * 2,
  },
  priceStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.extraLarge,
  },
  defaultPriceStyle: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.extraLarge,
  },
  priceContaner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.SMALL,
  },
  discountContainer: {
    paddingHorizontal: Padding.DEFAULT,
    paddingVertical: Padding.EXTRA_SMALL,
    borderRadius: Radius.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  discount: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
    color: colors.white,
  },
  averageRatingStyle: {
    fontSize: FontSizes.extraLarge,
  },
  totalRatingStyle: {
    fontSize: FontSizes.large,
  },
  selectOption: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
    paddingTop: Padding.DEFAULT,
    paddingHorizontal: Padding.DEFAULT,
  },
  description: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  descriptionValue: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  productWrapper: {
    width:
      Screen_Dimensions.WIDTH / 2 - (Spacing.DEFAULT + Spacing.DEFAULT / 2),
  },
  contentContainer: {
    paddingHorizontal: Padding.DEFAULT,
    paddingBottom: Padding.DEFAULT,
  },
  titleStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
    paddingVertical: Padding.DEFAULT,
  },
  safeAreaStyle: {},
  footerContainer: {
    flexDirection: 'row',
    gap: Gap.DEFAULT,
  },
  buttonAddToCart: {
    width: Screen_Dimensions.WIDTH / 2 - 22.5,
    paddingVertical: Padding.DEFAULT,
    alignItems: 'center',
    borderRadius: Radius.DEFAULT,
  },
  addToCart: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fetchMoreLoaderContainer: {
    paddingTop: Padding.DEFAULT,
  },
  productContentContainer: {
    paddingHorizontal: Padding.DEFAULT,
  },
  qunatityContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    right: -8,
    top: -4,
    borderRadius: Screen_Dimensions.WIDTH,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.default,
    textAlign: 'center',
    color: 'white',
  },
});
