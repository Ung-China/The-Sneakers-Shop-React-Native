import {StyleSheet} from 'react-native';
import {FontSizes, Gap} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.EXTRA_SMALL - 3,
  },
  averageRating: {
    fontSize: FontSizes.default,
  },
  totalRating: {
    fontSize: FontSizes.default,
  },
});
