import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Padding.DEFAULT,
  },
  name: {
    textTransform: 'uppercase',
    fontFamily: Fonts.SIMIBOLD,
    fontSize: FontSizes.overLarge * 2,
  },
  label: {
    textTransform: 'uppercase',
    fontFamily: Fonts.SIMIBOLD,
    fontSize: FontSizes.overLarge,
    paddingVertical: Padding.DEFAULT,
  },
  visionDescription: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  copyRight: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
    paddingVertical: Padding.DEFAULT,
  },
  footerContainer: {},
  contactContainerStyle: {
    gap: Gap.DEFAULT,
  },
});
