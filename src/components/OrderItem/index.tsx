import {Text, View} from 'react-native';
import styles from './style';
import {OrderItemProps} from '../../types';
import Touchable from '../Touchable';
import {Icons} from '../../constants';
import {useTheme} from '../../hooks';
import {dateFormat} from '../../helpers';
import {useTranslation} from 'react-i18next';
import currencyFormat from '../../helpers/CurrencyFormat';

const OrderItem: React.FC<OrderItemProps> = ({onPress, item}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  return (
    <Touchable
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.secondary}]}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={[styles.orderNumber, {color: colors.text}]}>
            {item.orderNumber}
          </Text>
          <Text style={[styles.orderDate, {color: colors.grey}]}>
            {dateFormat(item.orderDate)}
          </Text>
        </View>
        <Icons.ARROWRIGHT width={10} height={15} color={colors.grey} />
      </View>

      <View style={styles.footer}>
        <View style={styles.footerContentBlock}>
          <Text style={[styles.title, {color: colors.grey}]}>
            {t('products')}
          </Text>
          <Text style={[styles.value, {color: colors.text}]}>1</Text>
        </View>
        <View style={styles.footerContentBlock}>
          <Text style={[styles.title, {color: colors.grey}]}>{t('price')}</Text>
          <Text style={[styles.value, {color: colors.text}]}>
            ${currencyFormat(item.totalAmount)}
          </Text>
        </View>
        <View style={styles.footerContentBlock}>
          <Text style={[styles.title, {color: colors.grey}]}>
            {t('status')}
          </Text>
          <Text style={[styles.value, {color: colors.text}]}>
            {item.status}
          </Text>
        </View>
      </View>
    </Touchable>
  );
};

export default OrderItem;
