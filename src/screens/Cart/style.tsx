import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: Padding.DEFAULT,
  },
  labelStyle: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  containerStyle: {},
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: FontSizes.extraLarge,
    fontFamily: Fonts.REGULAR,
  },
  total: {
    fontSize: FontSizes.extraLarge,
    fontFamily: Fonts.MEDIUM,
  },
  footerSafe: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  footerContainer: {
    gap: Gap.SMALL,
  },
  headerTitleStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.extraLarge,
  },
});
