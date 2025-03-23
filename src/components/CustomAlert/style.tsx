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
import {colors} from '../../constants/colors/colorTypes';

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    width: Screen_Dimensions.WIDTH / 1.4,
    borderRadius: Radius.DEFAULT,
  },
  header: {
    gap: Gap.EXTRA_SMALL,
    padding: Padding.DEFAULT,
  },
  inputContainer: {
    padding: Padding.DEFAULT,
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.extraLarge,
  },
  description: {
    textAlign: 'center',
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
    lineHeight: Spacing.EXTRA_LARGE,
  },
  footer: {
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
  cancel: {
    width: '50%',
    padding: Padding.DEFAULT,
  },
  continue: {
    width: '50%',
    padding: Padding.DEFAULT,
  },
  buttonLabel: {
    textAlign: 'center',
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  separator: {
    width: 0.5,
    backgroundColor: colors.grey,
  },
  pinCodeContainer: {
    width: 40,
    height: 40,
    borderRadius: Radius.DEFAULT,
    borderWidth: 0,
  },
  pinCodeText: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.overLarge,
  },
  activePinCodeContainer: {
    borderWidth: 0,
  },
  resendLabel: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
    textAlign: 'center',
    paddingTop: Padding.DEFAULT,
  },
  focusStick: {
    height: 20,
  },
  errorOTP: {
    color: 'red',
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.default,
    lineHeight: Spacing.EXTRA_LARGE,
  },
  singleButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
