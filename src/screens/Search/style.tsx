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
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.DEFAULT,
    gap: Gap.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  noLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.SMALL,
  },
  label: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
