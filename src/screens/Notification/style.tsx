import {StyleSheet} from 'react-native';
import {Padding} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationContentContainer: {
    padding: Padding.DEFAULT,
    paddingBottom: Padding.BOTTOM,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
