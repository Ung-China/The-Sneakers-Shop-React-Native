import {FlatList, Text, View} from 'react-native';
import styles from './style';
import ItemSeparatorWidth from '../ItemSeparatorWidth';
import {FlexibleTabItemProps, FlexibleTabProps} from '../../types';
import {useFlexibleTab} from './hooks';
import FlexibleTabItem from '../FlexibleTabItem';
const FlexibleTab: React.FC<FlexibleTabProps> = ({
  data,
  children,
  onTabChange,
}) => {
  const {flexibleTabRef, activeId, setActiveId, scrollToIndex} =
    useFlexibleTab();

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
          setActiveId(item.id);
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
        />
      </View>
      {children}
    </>
  );
};

export default FlexibleTab;
