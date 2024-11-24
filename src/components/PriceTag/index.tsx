import {Text, View} from 'react-native';
import {PriceTagProps} from '../../types';
import styles from './style';
import currencyFormat from '../../helpers/CurrencyFormat';
import {checkDiscount} from '../../helpers';
import {useTheme} from '../../hooks';
const PriceTag: React.FC<PriceTagProps> = ({
  price,
  promotion,
  containerStyle,
  defaultPriceStyle,
  priceStyle,
}) => {
  const {discount, hasDiscount} = checkDiscount(price, promotion);
  const {colors} = useTheme();
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.price, priceStyle, {color: colors.text}]}>
        ${currencyFormat(discount)}
      </Text>

      {promotion && (
        <Text
          style={[
            styles.defaultPrice,
            defaultPriceStyle,
            {color: colors.text},
          ]}>
          ${currencyFormat(hasDiscount)}
        </Text>
      )}
    </View>
  );
};

export default PriceTag;
