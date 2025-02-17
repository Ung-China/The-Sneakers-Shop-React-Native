import {Radius, Spacing} from '../../constants';
import Skeleton from '../Skeleton';

const ProductItemSkeleton: React.FC = () => {
  return (
    <Skeleton
      containerStyle={{
        borderRadius: Radius.DEFAULT,
        height: 200,
        width: 160,
      }}
    />
  );
};

export default ProductItemSkeleton;
