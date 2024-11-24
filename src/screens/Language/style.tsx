import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Padding} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {},
  buttonLabel: {
    fontSize: FontSizes.large,
  },
  contentContainer: {
    padding: Padding.DEFAULT,
  },
  applyButtonLabel: {
    textAlign: 'center',
    fontFamily: Fonts.REGULAR,
  },
  applyButtonContainer: {},
});
