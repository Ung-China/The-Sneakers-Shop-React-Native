import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Radius,
  Screen_Dimensions,
  Spacing,
} from '../../constants';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: Padding.DEFAULT,
    paddingBottom: Padding.BOTTOM * 2,
  },
  productWrapper: {
    width:
      Screen_Dimensions.WIDTH / 2 - (Spacing.DEFAULT + Spacing.DEFAULT / 2),
  },
  headeStyle: {},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: Spacing.DEFAULT,
    gap: Gap.DEFAULT,
  },
  inputContainer: {
    flex: 1,
    borderRadius: Radius.DEFAULT,
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  label: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
});
