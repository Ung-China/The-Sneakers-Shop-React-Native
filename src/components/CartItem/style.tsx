import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colorTypes';
import {Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Padding.SMALL,
    borderRadius: Radius.DEFAULT,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: Radius.DEFAULT,
  },
  loadingImagestyle: {
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: Radius.DEFAULT,
  },
  swipeableContainer: {
    backgroundColor: 'red',
    borderRadius: Radius.DEFAULT,
  },
  rightActionContainer: {
    flex: 1,
    padding: Padding.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
