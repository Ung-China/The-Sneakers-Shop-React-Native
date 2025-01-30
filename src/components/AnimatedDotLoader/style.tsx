import {StyleSheet} from 'react-native';
import {Padding, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.SMALL,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
