import {StyleSheet} from 'react-native';
import {Fonts, FontSizes, Gap, Padding, Radius, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: Padding.DEFAULT,
    gap: Gap.DEFAULT,
  },
  inputContainer: {
    paddingHorizontal: Padding.DEFAULT,
    paddingTop: Padding.DEFAULT,
    gap: Gap.DEFAULT,
  },
  textInputStyle: {
    borderRadius: Radius.DEFAULT,
    paddingHorizontal: Padding.DEFAULT,
  },
  cityContainer: {
    flexDirection: 'row',
    borderRadius: Radius.DEFAULT,
    paddingHorizontal: Padding.DEFAULT,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.extraLarge,
  },
  separator: {
    paddingBottom: 15,
    marginHorizontal: Spacing.DEFAULT,
    borderBottomWidth: 0.5,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Padding.DEFAULT,
    marginHorizontal: Spacing.DEFAULT,
    marginTop: Spacing.DEFAULT,
    borderRadius: Radius.DEFAULT,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.SMALL,
  },
  countryLabel: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  footerContainer: {
    borderTopWidth: 0.5,
  },
  saveButton: {
    paddingVertical: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    alignItems: 'center',
  },
  save: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
});
