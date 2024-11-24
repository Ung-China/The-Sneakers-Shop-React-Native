import {StyleProp, ViewStyle, ImageStyle} from 'react-native';

export interface FlexibleSwiperProps {
  imageUrlList: string[];
  wrapperStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  dotColor?: string;
  activeDotColor?: string;
  paginationStyle?: StyleProp<ViewStyle>;
  autoPlay?: boolean;
  isShowPagination?: boolean;
  iconSize?: number;
  loadingImageStyle?: StyleProp<ImageStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}
