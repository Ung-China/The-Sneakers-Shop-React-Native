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
  headerContainer: {},
  headerContentContainerStyle: {},
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Radius.DEFAULT,
    margin: Spacing.DEFAULT,
    paddingHorizontal: Padding.DEFAULT,
  },
  swiperImageStyle: {
    height: 200,
    marginHorizontal: Spacing.DEFAULT,
  },
  bigSwiperImageStyle: {
    height: 300,
    marginHorizontal: Spacing.DEFAULT,
  },
  swiperContainer: {
    height: 200,
  },
  bigSwiperContainer: {
    height: 300,
    marginTop: Spacing.DEFAULT,
  },
  bigswiperLoadingImageStyle: {
    height: 300,
    width: Screen_Dimensions.WIDTH - 30,
    marginHorizontal: Spacing.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  swiperLoadingImageStyle: {
    height: 200,
    width: Screen_Dimensions.WIDTH - 30,
    marginHorizontal: Spacing.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  sectionContainer: {
    paddingVertical: Padding.DEFAULT,
  },
  sectionActionButtonLabel: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  productContentContainer: {
    paddingHorizontal: Padding.DEFAULT,
  },
  separator: {
    width: Spacing.DEFAULT,
  },
});
