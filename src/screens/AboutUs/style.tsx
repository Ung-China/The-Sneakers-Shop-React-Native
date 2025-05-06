import {Platform, StyleSheet} from 'react-native';
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

  footerContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    padding: Padding.DEFAULT,
    marginBottom: Platform.OS === 'ios' ? 30 : 0,
    width: Screen_Dimensions.WIDTH,
    alignItems: 'center',
  },
  contactContainerStyle: {
    gap: Gap.DEFAULT,
    justifyContent: 'center',
  },
});
