import {View} from 'react-native';
import {provinces} from '../../../../models/Province';
import {ProvinceItem, ItemSeparatorHeight} from '../../../../components';
import styles from './style';
import {ProvinceItemProps, ProvinceProps} from '../../../../types';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

const ProvinceModal: React.FC<ProvinceProps> = ({onPress, isActive}) => {
  const provinceItem = ({
    item,
    index,
  }: {
    item: ProvinceItemProps['item'];
    index: number;
  }) => {
    return (
      <ProvinceItem
        item={item}
        onPress={() => onPress(index, item.name)}
        isActive={isActive === index}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={provinces}
        renderItem={provinceItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorHeight}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ProvinceModal;
