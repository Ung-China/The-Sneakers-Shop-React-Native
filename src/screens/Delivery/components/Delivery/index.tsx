import {Text, View} from 'react-native';
import styles from './style';
import {
  AddressItem,
  CustomSnackbar,
  Footer,
  ItemSeparatorHeight,
  Touchable,
} from '../../../../components';
import {useAddress, useTheme} from '../../../../hooks';
import {useTranslation} from 'react-i18next';
import {DeliveryModalProps, DeliveryProps} from '../../../../types';
import {Icons} from '../../../../constants';
import {FlatList} from 'react-native-gesture-handler';

const DeliveryModal: React.FC<DeliveryModalProps> = ({
  onPressCancel,
  onPressApply,
  activeAddress,
  toggleAddress,
  handleNavigateToScreenAddress,
}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {addresses} = useAddress();

  const addressItem = ({item}: {item: DeliveryProps['item']}) => {
    return (
      <AddressItem
        onPress={() => toggleAddress(item.id)}
        item={item}
        isActive={activeAddress === item.id}
      />
    );
  };

  const footerCompenent = () => {
    return (
      <Touchable
        onPress={handleNavigateToScreenAddress}
        style={styles.footerComponentContainer}>
        <Icons.ADD width={25} height={25} color={colors.text} />
        <Text style={[styles.addAddress, {color: colors.text}]}>
          {t('addAddress')}
        </Text>
      </Touchable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerLabel, {color: colors.text}]}>
          {t('shippingAddress')}
        </Text>
        <View style={[styles.separator, {backgroundColor: colors.grey}]} />
      </View>
      <View style={styles.body}>
        <FlatList
          data={addresses}
          renderItem={addressItem}
          ListFooterComponent={footerCompenent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorHeight}
          contentContainerStyle={styles.contentContainerStyle}
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
    </View>
  );
};

export default DeliveryModal;
