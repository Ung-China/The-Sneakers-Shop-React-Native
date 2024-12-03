import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap} from '../../../../constants';
import {colors} from '../../../../constants/colors/colorTypes';

export default StyleSheet.create({
  container: {},
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  dateTimeContainer: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontSize: FontSizes.default,
    fontFamily: Fonts.MEDIUM,
    color: colors.grey,
  },
  time: {
    color: 'grey',
    fontFamily: Fonts.MEDIUM,
  },
  title: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.MEDIUM,
  },
  description: {
    color: colors.grey,
    fontSize: FontSizes.default,
    fontFamily: Fonts.REGULAR,
  },
  iconContentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  iconContainer: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
  },
  titleDescriptionContainer: {
    flex: 1,
    gap: Gap.EXTRA_SMALL,
  },
  seperatorContainer: {
    marginLeft: 80 + 15 + 45 / 2,
  },
});
