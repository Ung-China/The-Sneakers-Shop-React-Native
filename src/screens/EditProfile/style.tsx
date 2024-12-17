import {StyleSheet} from 'react-native';
import {
  Fonts,
  FontSizes,
  Gap,
  Padding,
  Radius,
  Screen_Dimensions,
  Spacing,
} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: 140,
    height: 140,
  },
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: Screen_Dimensions.HEIGHT * 2,
  },
  loadingImageStyle: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: Screen_Dimensions.HEIGHT * 2,
  },
  editProfileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.DEFAULT,
  },
  editIconContaner: {
    position: 'absolute',
    top: '50%',
  },
  textInputStyle: {
    borderRadius: Radius.DEFAULT,
    paddingHorizontal: Padding.DEFAULT,
  },
  inputContainer: {
    padding: Padding.DEFAULT,
    gap: Gap.SMALL,
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
  saveButton: {
    paddingVertical: Padding.DEFAULT,
    borderRadius: Radius.DEFAULT,
    alignItems: 'center',
  },
  save: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.large,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    borderRadius: 70,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.DEFAULT,
  },
});
