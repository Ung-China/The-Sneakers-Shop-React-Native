import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Padding.SMALL,
    borderRadius: Radius.DEFAULT,
    gap: Gap.SMALL,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: Radius.DEFAULT,
  },
  loadingImagestyle: {
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: Radius.DEFAULT,
  },
  swipeableContainer: {
    backgroundColor: 'red',
    borderRadius: Radius.DEFAULT,
  },
  rightActionContainer: {
    flex: 1,
    padding: Padding.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  size: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  price: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  hero: {
    flex: 1,
    justifyContent: 'space-between',
  },

  quantity: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
    color: colors.white,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.EXTRA_LARGE,
    width: 30,
    height: 30,
    backgroundColor: colors.black,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
