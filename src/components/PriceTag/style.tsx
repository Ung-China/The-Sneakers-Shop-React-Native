import {StyleSheet} from 'react-native';
import {FontSizes, Gap} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Gap.EXTRA_SMALL,
    alignItems: 'baseline',
  },
  price: {
    fontSize: FontSizes.large,
  },
  defaultPrice: {
    fontSize: FontSizes.large,
    opacity: 0.4,
    textDecorationLine: 'line-through',
  },
});
