import {Radius} from '../../constants';
import Skeleton from '../Skeleton';

const BrandItemSkeleton: React.FC = () => {
  return (
    <Skeleton
      containerStyle={{
        borderRadius: Radius.DEFAULT,
        height: 140,
        width: 160,
      }}
    />
  );
};

export default BrandItemSkeleton;
