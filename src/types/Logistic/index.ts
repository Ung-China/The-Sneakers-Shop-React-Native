import {StyleProp, ViewStyle} from 'react-native';

export interface LogisticProps {
  onPress: () => void;
  isActive: boolean;
  containerStyle: StyleProp<ViewStyle>;
  item: {
    id: number;
    name: string;
  };
}
