import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts, FontSizes, Gap, Padding, Radius, Spacing} from '../../constants';

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
  heartButton: {
    position: 'absolute',
    right: 0,
    borderRadius: Radius.EXTRA_LARGE,
    padding: Padding.EXTRA_SMALL,
  },
  price: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  hero: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.SMALL,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
