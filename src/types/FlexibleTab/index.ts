import {FlexibleTabItemProps} from '../FlexibleTabItem';

export interface FlexibleTabProps {
  children: React.ReactNode;
  data: Array<any>;
  onTabChange: (item: FlexibleTabItemProps['item']) => void;
}
