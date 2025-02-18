import {FlexibleTabItemProps} from '../FlexibleTabItem';

export interface FlexibleTabProps {
  children: React.ReactNode;
  data: Array<any>;
  activeId: number | null;
  onTabChange: (item: FlexibleTabItemProps['item']) => void;
  onEndReached?: () => void;
  isLoadingBrands?: boolean;
}
