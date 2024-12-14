import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Radius,
  Screen_Dimensions,
  Spacing,
} from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    gap: Gap.DEFAULT,
  },
  headerLabel: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
    paddingHorizontal: Padding.DEFAULT,
  },
  separator: {
    height: 0.5,
  },
  safeAreaStyle: {
    marginBottom: Spacing.DEFAULT,
    borderTopWidth: 0.5,
  },
  footerContainer: {
    flexDirection: 'row',
    gap: Gap.DEFAULT,
    paddingBottom: Padding.BOTTOM * 2,
  },
  buttonContainer: {
    width: Screen_Dimensions.WIDTH / 2 - 22.5,
    paddingVertical: Padding.DEFAULT,
    alignItems: 'center',
    borderRadius: Radius.DEFAULT,
  },
  buttonLabel: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  body: {},
  contentContainerStyle: {
    padding: Padding.DEFAULT,
  },
});
