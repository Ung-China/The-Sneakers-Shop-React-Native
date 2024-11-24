import {useCallback, useRef, useState} from 'react';
import {FlatList} from 'react-native';

const useFlexibleTab = () => {
  const flexibleTabRef = useRef<FlatList<any>>(null);
  const [activeId, setActiveId] = useState<number>(1);

  const scrollToIndex = useCallback(
    (index: number) => {
      flexibleTabRef?.current?.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      });
    },
    [activeId],
  );

  return {flexibleTabRef, activeId, setActiveId, scrollToIndex};
};
export default useFlexibleTab;
