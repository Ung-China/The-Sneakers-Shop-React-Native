import {StyleSheet} from 'react-native';
import {Gap, Padding} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingRight: Padding.DEFAULT,
    paddingVertical: Padding.EXTRA_SMALL,
  },
  leadingContainer: {
    width: '65%',
  },
  actionContainer: {
    width: '35%',
    flexDirection: 'row',
    gap: Gap.DEFAULT,
    justifyContent: 'flex-end',
  },
});
