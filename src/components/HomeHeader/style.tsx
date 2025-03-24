import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Screen_Dimensions,
  Spacing,
} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingRight: Padding.DEFAULT,
    paddingVertical: Padding.EXTRA_SMALL,
    marginTop: Spacing.DEFAULT,
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
  qunatityContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    right: -5,
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
