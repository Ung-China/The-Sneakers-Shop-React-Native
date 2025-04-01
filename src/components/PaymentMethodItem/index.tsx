import {Text, View} from 'react-native';
import styles from './style';
import Touchable from '../Touchable';
import {PaymentMethodProps} from '../../types';
import {useTheme} from '../../hooks';
import {Icons} from '../../constants';
import React from 'react';

const PaymentMethodItem: React.FC<PaymentMethodProps> = ({
  onPress,
  item,
  isActive,
}) => {
  const {colors} = useTheme();
  return (
    <Touchable
      style={[styles.container, {backgroundColor: colors.secondary}]}
      onPress={onPress}>
      <View style={styles.contentContainer}>
        <View>
          {item.prefixIcon &&
            React.createElement(item.prefixIcon, {
              color: colors.icon,
              width: 50,
              height: 50,
            })}
        </View>
        <View style={styles.body}>
          <Text style={[styles.title, {color: colors.text}]}>{item.name}</Text>
          <Text style={[styles.description, {color: colors.grey}]}>
            {item.number} | {item.accountName}
          </Text>
        </View>
      </View>

      {isActive ? (
        <Icons.RadioFill width={20} height={20} color={colors.text} />
      ) : (
        <Icons.RADIO width={20} height={20} color={colors.text} />
      )}
    </Touchable>
  );
};
export default PaymentMethodItem;
