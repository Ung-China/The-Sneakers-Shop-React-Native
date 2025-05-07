import {FlatList, Text, View} from 'react-native';
import {VariantProps} from '../../types';
import {Spacing} from '../../constants';
import VariantItem from '../VariantItem';
import {useState} from 'react';
import ItemSeparatorHeight from '../ItemSeparatorHeight';
import Footer from '../Footer';
import Touchable from '../Touchable';
import styles from './style';
import {colors} from '../../constants/colors/colorTypes';
import {useTranslation} from 'react-i18next';
import {useCart} from '../../hooks';

const VariantBottomTab: React.FC<VariantProps> = ({
  item,
  onPressCancel,
  onPressApply,
  setActiveVariantId,
  setSize,
  setPrice,
  setQuantity,
  activeVariantId,
}) => {
  const {t} = useTranslation();

  const variantItem = ({
    item,
    index,
  }: {
    item: VariantProps['item'];
    index: number;
  }) => {
    return (
      <VariantItem
        onPress={() => {
          setActiveVariantId(index);
          setSize(item.size);
          setPrice(item.price);
          setQuantity(item.quantity);
        }}
        item={item}
        isActive={activeVariantId === index}
        containerStyle={{marginLeft: Spacing.DEFAULT}}
      />
    );
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={[styles.headerLabel, {color: colors.textReversed}]}>
          {t('selectOption')}
        </Text>
        <View style={[styles.separator, {backgroundColor: colors.grey}]} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={item}
          renderItem={variantItem}
          numColumns={2}
          scrollEnabled={false}
          ItemSeparatorComponent={ItemSeparatorHeight}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <Footer
        safeAreaStyle={[styles.safeAreaStyle, {borderColor: colors.grey}]}
        contentContainerStyle={[styles.footerContainer]}>
        <Touchable
          onPress={onPressCancel}
          style={[styles.buttonContainer, {backgroundColor: 'red'}]}>
          <Text style={[styles.buttonLabel, {color: colors.white}]}>
            {t('cancel')}
          </Text>
        </Touchable>
        <Touchable
          onPress={onPressApply}
          style={[
            styles.buttonContainer,
            {backgroundColor: colors.primaryReversed},
          ]}>
          <Text style={[styles.buttonLabel, {color: colors.textReversed}]}>
            {t('apply')}
          </Text>
        </Touchable>
      </Footer>
    </>
  );
};

export default VariantBottomTab;
