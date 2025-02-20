import {FlatList, Text, View} from 'react-native';
import styles from './style';
import ItemSeparatorWidth from '../ItemSeparatorWidth';
import {FlexibleTabItemProps, FlexibleTabProps} from '../../types';
import {useFlexibleTab} from './hooks';
import FlexibleTabItem from '../FlexibleTabItem';
import React from 'react';
import BrandItemSkeleton from '../BrandItemSkeleton';
import {dummyBrands} from '../../models/Brand';
import Skeleton from '../Skeleton';
import {Radius} from '../../constants';
const FlexibleTab: React.FC<FlexibleTabProps> = ({
  data,
  children,
  activeId,
  onTabChange,
  onEndReached,
  isLoadingBrands,
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

  const brandItemSkeleton = () => {
    return (
      <Skeleton
        containerStyle={{
          borderRadius: Radius.DEFAULT,
          height: 100,
          width: 80,
        }}
      />
    );
  };

  return (
    <>
      {isLoadingBrands ? (
        <View style={styles.container}>
          <FlatList
            data={dummyBrands}
            horizontal
            ref={flexibleTabRef}
            renderItem={brandItemSkeleton}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={styles.contentContainerStyle}
            onEndReachedThreshold={0.5}
            onEndReached={onEndReached}
          />
        </View>
      ) : (
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
      )}

      {children}
    </>
  );
};

export default FlexibleTab;
