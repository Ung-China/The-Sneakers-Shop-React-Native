import {StyleProp, ViewStyle} from 'react-native';

export interface VariantProps {
  onPress: () => void;
  index?: number;
  containerStyle: StyleProp<ViewStyle>;
  isActive: boolean;
  item: {
    id: number;
    size: string;
    price: number;
    quantity: number;
    finalPrice: number;
    hasVariantPromotion: boolean;
  };

  onPressCancel?: () => void;
  onPressApply?: () => void;
  selectedSize: string;
  selectedPrice: number;
  activeVariantId: number | null;
  setActiveVariantId?: React.Dispatch<React.SetStateAction<number | null>>;
  setSize?: React.Dispatch<React.SetStateAction<string>>;
  setPrice?: React.Dispatch<React.SetStateAction<number>>;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
}
