import {View} from 'react-native';
import {cities} from '../../../../models/City';
import {CityItem, ItemSeparatorHeight} from '../../../../components';
import styles from './style';
import {CityItemProps, CityModalProps} from '../../../../types';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

const CityModal: React.FC<CityModalProps> = ({onPress, isActive}) => {
  const cityItem = ({
    item,
    index,
  }: {
    item: CityItemProps['item'];
    index: number;
  }) => {
    return (
      <CityItem
        item={item}
        onPress={() => onPress(index, item.name)}
        isActive={isActive === index}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={cityItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorHeight}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CityModal;
