import {StyleSheet} from 'react-native';
import {Padding} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: Padding.DEFAULT,
    paddingBottom: Padding.BOTTOM,
  },
  fetchMoreLoaderContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Padding.DEFAULT,
    paddingBottom: Padding.BOTTOM,
  },
  notFoundContainer: {
    paddingVertical: Padding.DEFAULT,
  },
});
