import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Padding} from '../../constants';

export default StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Padding.DEFAULT,
  },
  title: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.MEDIUM,
  },
  row: {},
});
