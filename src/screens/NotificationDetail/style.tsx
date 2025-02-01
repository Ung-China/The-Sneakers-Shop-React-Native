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
  container: {
    flex: 1,
  },
  swiperImageStyle: {
    height: 200,
    marginHorizontal: Spacing.DEFAULT,
    marginTop: Spacing.DEFAULT,
  },
  swiperContainer: {
    height: 215,
  },
  swiperLoadingImageStyle: {
    height: 200,
    width: Screen_Dimensions.WIDTH - 30,
    marginHorizontal: Spacing.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  contentContainer: {
    padding: Padding.DEFAULT,
    gap: Gap.DEFAULT,
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  description: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
