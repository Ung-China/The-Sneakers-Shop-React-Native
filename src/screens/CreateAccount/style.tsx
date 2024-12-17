import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    gap: Gap.EXTRA_SMALL,
  },
  inputContainer: {
    padding: Padding.DEFAULT,
    gap: Gap.DEFAULT,
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.overLarge,
  },
  description: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  textInputStyle: {
    paddingHorizontal: Padding.DEFAULT,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.DEFAULT,
    paddingHorizontal: Padding.DEFAULT,
  },
  footerContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  footerButton: {
    paddingVertical: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    alignItems: 'center',
  },
  footerLabel: {
    fontFamily: Fonts.REGULAR,
  },
});
