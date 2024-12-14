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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Radius.DEFAULT,
    marginTop: Spacing.DEFAULT,
    marginHorizontal: Spacing.DEFAULT,
    paddingHorizontal: Padding.DEFAULT,
  },
});
