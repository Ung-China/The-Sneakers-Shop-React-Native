import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Padding} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: Padding.DEFAULT,
  },
  textInput: {
    flex: 1,
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
});
