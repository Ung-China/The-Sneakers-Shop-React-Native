import {FlatList, Text, View} from 'react-native';
import styles from './style';
import ItemSeparatorWidth from '../ItemSeparatorWidth';
import {FlexibleTabItemProps, FlexibleTabProps} from '../../types';
import {useFlexibleTab} from './hooks';
import FlexibleTabItem from '../FlexibleTabItem';
import React from 'react';
const FlexibleTab: React.FC<FlexibleTabProps> = ({
  data,
  children,
  activeId,
  onTabChange,
  onEndReached,
}) => {
  const {flexibleTabRef, scrollToIndex} = useFlexibleTab();

  const flexibleTabItem = ({
    item,
    index,
  }: {
    item: FlexibleTabItemProps['item'];
    index: number;
  }) => {
    return (
      <FlexibleTabItem
        activeId={activeId}
        item={item}
        onPress={() => {
          onTabChange(item);
          scrollToIndex(index);
        }}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          horizontal
          ref={flexibleTabRef}
          renderItem={flexibleTabItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={ItemSeparatorWidth}
          contentContainerStyle={styles.contentContainerStyle}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
        />
      </View>
      {children}
    </>
  );
};

export default FlexibleTab;
