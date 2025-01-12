import {StyleSheet} from 'react-native';
import {Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  contentContainer: {
    padding: Padding.DEFAULT + 5,
    borderRadius: Radius.DEFAULT,
  },
});
