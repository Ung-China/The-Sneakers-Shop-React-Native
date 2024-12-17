import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {flex: 1},
  deliveryContainer: {
    padding: Padding.DEFAULT,
  },
  labelContainer: {
    gap: Gap.EXTRA_SMALL,
  },
  mainLabel: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  subLabel: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
  },
  optionContainer: {
    paddingVertical: Padding.DEFAULT,
    gap: Gap.DEFAULT,
  },
  safeAreaStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  labelStyle: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  shippingContainer: {
    padding: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  shippngHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  body: {
    paddingTop: Padding.SMALL,
    gap: Gap.EXTRA_SMALL,
  },
  shippingLabel: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.default,
  },
  shipping: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
  },
  separator: {
    height: 0.5,
    marginVertical: Padding.DEFAULT,
  },
});
