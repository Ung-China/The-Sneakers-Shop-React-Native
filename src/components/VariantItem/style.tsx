import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Radius,
  Screen_Dimensions,
} from '../../constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Padding.DEFAULT,
    paddingVertical: Padding.EXTRA_SMALL,
    borderRadius: Radius.DEFAULT,
    width: Screen_Dimensions.WIDTH / 3 - 15 - 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Gap.EXTRA_SMALL - 3,
  },
  size: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  price: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
});
