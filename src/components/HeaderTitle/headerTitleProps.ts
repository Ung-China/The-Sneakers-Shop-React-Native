import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface HeaderTitleProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
