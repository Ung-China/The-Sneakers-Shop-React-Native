import {StyleSheet} from 'react-native';
import {Padding, Radius, Screen_Dimensions, Spacing} from '../../constants';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  productWrapper: {
    width:
      Screen_Dimensions.WIDTH / 2 - (Spacing.DEFAULT + Spacing.DEFAULT / 2),
  },
  contentContainer: {
    paddingHorizontal: Padding.DEFAULT,
    paddingBottom: Padding.DEFAULT,
  },
  inputContainer: {
    justifyContent: 'space-between',
    borderRadius: Radius.DEFAULT,
    marginHorizontal: Spacing.DEFAULT,
    marginTop: Spacing.DEFAULT,
  },
});
