import {StyleSheet} from 'react-native';
import {Padding, Screen_Dimensions, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  productWrapper: {
    width:
      Screen_Dimensions.WIDTH / 2 - (Spacing.DEFAULT + Spacing.DEFAULT / 2),
  },
  contentContainer: {
    paddingHorizontal: Padding.DEFAULT,
    paddingTop: Padding.DEFAULT,
    paddingBottom: Padding.BOTTOM * 2,
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
    paddingBottom: Padding.BOTTOM * 2,
  },
});
