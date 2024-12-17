import {StyleSheet} from 'react-native';
import {FontSizes, Gap, Padding, Screen_Dimensions} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Gap.DEFAULT,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.DEFAULT,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: Screen_Dimensions.HEIGHT * 2,
  },
  loadingImageStyle: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: Screen_Dimensions.HEIGHT * 2,
  },
  nameContainer: {
    gap: Gap.EXTRA_SMALL,
  },
  nameText: {
    fontSize: FontSizes.extraLarge,
    fontWeight: 'bold',
  },
  greetingText: {
    fontSize: FontSizes.large,
  },
  buttonContainer: {
    padding: Padding.SMALL,
    borderRadius: Screen_Dimensions.HEIGHT * 2,
  },
});
