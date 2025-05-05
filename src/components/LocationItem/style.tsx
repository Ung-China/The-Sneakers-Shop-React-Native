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
import {colors} from '../../constants/colors/colorTypes';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: Radius.DEFAULT,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: Screen_Dimensions.WIDTH - 30,
  },
  loadingImagestyle: {
    backgroundColor: colors.white,
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    padding: Padding.DEFAULT,
    justifyContent: 'center',
    gap: Gap.EXTRA_SMALL,
  },
  imageStyle: {
    width: 150,
    height: '100%',
    borderRadius: Radius.DEFAULT,
  },
  name: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
    color: 'black',
  },
  mapContainer: {
    flexDirection: 'row',
    gap: Gap.EXTRA_SMALL,
  },
  shopLocation: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
    lineHeight: Spacing.EXTRA_LARGE,
    flex: 1,
    color: colors.grey,
  },
  time: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
    color: colors.grey,
  },
  openMapContainer: {
    alignItems: 'flex-end',
  },
  openMap: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.default,
    color: 'black',
  },
});
