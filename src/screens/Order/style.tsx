import {StyleSheet} from 'react-native';
import {Fonts, FontSizes} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitleStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.extraLarge,
  },
  tabItemStyle: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.REGULAR,
  },
  listContainer: {
    flex: 1,
  },
});
