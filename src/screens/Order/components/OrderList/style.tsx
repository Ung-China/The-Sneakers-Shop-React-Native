import {StyleSheet} from 'react-native';
import {Padding} from '../../../../constants';

export default StyleSheet.create({
  orderItemContentContainer: {
    padding: Padding.DEFAULT,
  },
  container: {
    flex: 1,
  },
  notFoundContainer: {
    paddingVertical: Padding.DEFAULT,
  },
  fetchMoreLoaderContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Padding.DEFAULT,
    paddingBottom: Padding.BOTTOM,
  },
});
