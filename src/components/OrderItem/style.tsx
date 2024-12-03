import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    borderRadius: Radius.DEFAULT,
    padding: Padding.DEFAULT,
    gap: Gap.SMALL,
  },
  orderNumber: {
    fontSize: FontSizes.extraLarge,
    fontFamily: Fonts.MEDIUM,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {},
  orderDate: {
    fontSize: FontSizes.default,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerContentBlock: {
    alignItems: 'center',
    gap: Gap.SMALL,
  },
  title: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  value: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.MEDIUM,
  },
});
