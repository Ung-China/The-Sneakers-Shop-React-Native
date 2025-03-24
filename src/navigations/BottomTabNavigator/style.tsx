import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Screen_Dimensions} from '../../constants';

export default StyleSheet.create({
  qunatityContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    right: -10,
    top: -4,
    borderRadius: Screen_Dimensions.WIDTH,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.default,
    textAlign: 'center',
    color: 'white',
  },
});
