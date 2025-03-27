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
    // flex: 1,
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
  body: {},
  safeAreaStyle: {
    borderTopWidth: 0.5,
    marginBottom: Spacing.DEFAULT,
  },
  footerContainer: {
    flexDirection: 'row',
    gap: Gap.DEFAULT,
    paddingBottom: Padding.BOTTOM,
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
  contentContainerStyle: {
    padding: Padding.DEFAULT,
  },
  footerComponentContainer: {
    paddingTop: Padding.DEFAULT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.EXTRA_SMALL,
  },
  addAddress: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
});
