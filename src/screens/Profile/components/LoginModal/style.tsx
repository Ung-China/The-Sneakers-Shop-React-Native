import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Radius,
  Spacing,
} from '../../../../constants';
import {colors} from '../../../../constants/colors/colorTypes';

export default StyleSheet.create({
  container: {
    paddingBottom: Padding.BOTTOM * 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Padding.DEFAULT,
  },
  headerLabel: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  separator: {
    height: 0.5,
    marginTop: Spacing.DEFAULT,
  },
  inputContainer: {
    padding: Padding.DEFAULT,
    gap: Gap.DEFAULT,
  },
  textInputStyle: {
    paddingHorizontal: Padding.DEFAULT,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.DEFAULT,
    paddingHorizontal: Padding.DEFAULT,
  },
  buttonStyle: {
    textAlign: 'center',
  },
  tonContainer: {
    flex: 1,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
  forgotPasswordLabel: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Gap.EXTRA_SMALL,
  },
  line: {
    width: 100,
    height: 0.5,
    backgroundColor: colors.grey,
  },
  or: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  socialButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.DEFAULT,
    padding: Padding.DEFAULT,
    backgroundColor: colors.lightGrey,
  },
});
