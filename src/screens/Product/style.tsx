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
    paddingVertical: Padding.SMALL - 2,
    borderRadius: Radius.DEFAULT,
  },
  discount: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
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
});
