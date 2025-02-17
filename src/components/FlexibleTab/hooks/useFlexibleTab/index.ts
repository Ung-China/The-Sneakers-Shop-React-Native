import {useCallback, useRef, useState} from 'react';
import {FlatList} from 'react-native';

const useFlexibleTab = () => {
  const flexibleTabRef = useRef<FlatList<any>>(null);

  const scrollToIndex = useCallback((index: number) => {
    flexibleTabRef?.current?.scrollToIndex({
      index: index,
      animated: true,
      viewPosition: 0.5,
    });
  }, []);

  return {flexibleTabRef, scrollToIndex};
};
export default useFlexibleTab;
