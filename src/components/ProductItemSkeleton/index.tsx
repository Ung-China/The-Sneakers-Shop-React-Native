import {View} from 'react-native-reanimated/lib/typescript/Animated';
import {Radius, Spacing} from '../../constants';
import Skeleton from '../Skeleton';

const ProductItemSkeleton: React.FC = () => {
  return (
    <Skeleton
      containerStyle={{
        borderRadius: Radius.DEFAULT,
        height: 250,
        width: 160,
      }}
    />
  );
};

export default ProductItemSkeleton;
