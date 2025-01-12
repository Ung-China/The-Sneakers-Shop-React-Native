import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Radius,
  Spacing,
} from '../../../../constants';

export default StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Padding.DEFAULT,
  },
  headerLabel: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSizes.large,
  },
  separator: {
    height: 0.5,
    marginTop: Spacing.DEFAULT,
  },
  buttonContainer: {
    paddingBottom: Padding.BOTTOM * 2,
    margin: Spacing.DEFAULT,
    gap: Gap.DEFAULT,
  },
  mapContainer: {
    padding: Padding.DEFAULT,
    flexDirection: 'row',
    borderRadius: Radius.DEFAULT,
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  map: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
});
