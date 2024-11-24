import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';
import {colors} from '../../constants/colors/colorTypes';

export default StyleSheet.create({
  contaner: {
    alignItems: 'center',
    width: 80,
    borderRadius: Radius.DEFAULT,
    padding: Padding.EXTRA_SMALL,
    gap: Gap.EXTRA_SMALL,
  },
  imageContainer: {
    width: 65,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.DEFAULT,
  },
  imageStyle: {
    borderRadius: Radius.DEFAULT,
    width: 60,
    height: 60,
  },
  loadingImageStyle: {
    backgroundColor: colors.white,
    width: 60,
    height: 60,
  },
  name: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
});
