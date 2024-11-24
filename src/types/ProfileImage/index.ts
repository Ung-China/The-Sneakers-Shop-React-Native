import {ImageStyle, StyleProp} from 'react-native';

export interface ProfileImageProps {
  imageContainer?: StyleProp<ImageStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  loadingImageStyle?: StyleProp<ImageStyle>;
  iconSize?: number;
}
