import {Text, View} from 'react-native';
import {VariantProps} from '../../types';
import Touchable from '../Touchable';
import currencyFormat from '../../helpers/CurrencyFormat';
import styles from './style';
import {useTranslation} from 'react-i18next';

const VariantItem: React.FC<VariantProps> = ({
  item,
  onPress,
  isActive,
  containerStyle,
}) => {
  const {t} = useTranslation();

  return (
    <Touchable onPress={onPress}>
      <View
        style={[
          styles.container,
          containerStyle,
          {backgroundColor: isActive ? 'black' : 'white'},
        ]}>
        {item.hasVariantPromotion ? (
          <View style={styles.hasPromotionContainer}>
            <Text
              style={[
                styles.size,
                {
                  color: isActive ? 'white' : 'black',
                },
              ]}>
              ${currencyFormat(item.finalPrice)}{' '}
            </Text>
            <Text
              style={[
                styles.size,
                {
                  color: isActive ? 'gray' : 'gray',
                  textDecorationLine: 'line-through',
                  opacity: 2,
                },
              ]}>
              ${currencyFormat(item.price)}
            </Text>
          </View>
        ) : (
          <Text style={[styles.size, {color: isActive ? 'white' : 'black'}]}>
            ${currencyFormat(item.price)}
          </Text>
        )}

        <Text style={[styles.price, {color: isActive ? 'white' : 'black'}]}>
          {item.size} |{' '}
          {item.quantity === 0 ? t('soldOut') : `${item.quantity} ${t('left')}`}
        </Text>
      </View>
    </Touchable>
  );
};

export default VariantItem;
