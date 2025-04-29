import {Radius, Spacing} from '../../constants';
import Skeleton from '../Skeleton';

const OrderItemSkeleton: React.FC = () => {
  return (
    <Skeleton
      containerStyle={{
        borderRadius: Radius.DEFAULT,
        height: 150,
      }}
    />
  );
};

export default OrderItemSkeleton;
