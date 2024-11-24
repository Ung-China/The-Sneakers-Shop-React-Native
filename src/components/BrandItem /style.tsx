import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';
import {colors} from '../../constants/colors/colorTypes';

export default StyleSheet.create({
  container: {
    width: 160,
    borderRadius: Radius.DEFAULT,
    padding: Padding.EXTRA_SMALL,
    gap: Gap.EXTRA_SMALL,
  },
  imageContainer: {
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.DEFAULT,
  },
  imageStyle: {
    borderRadius: Radius.DEFAULT,
    width: 110,
    height: 100,
  },
  loadingImageStyle: {
    backgroundColor: colors.white,
    height: 100,
  },
  name: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
});
