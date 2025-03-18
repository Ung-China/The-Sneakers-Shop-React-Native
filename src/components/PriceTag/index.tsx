import {Text, View} from 'react-native';
import {PriceTagProps} from '../../types';
import styles from './style';
import currencyFormat from '../../helpers/CurrencyFormat';
import {useTheme} from '../../hooks';
const PriceTag: React.FC<PriceTagProps> = ({
  finalPrice,
  defaultPrice,
  containerStyle,
  defaultPriceStyle,
  priceStyle,
}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.price, priceStyle, {color: colors.text}]}>
        ${currencyFormat(finalPrice)}
      </Text>

      {defaultPrice && (
        <Text
          style={[
            styles.defaultPrice,
            defaultPriceStyle,
            {color: colors.text},
          ]}>
          ${currencyFormat(defaultPrice)}
        </Text>
      )}
    </View>
  );
};

export default PriceTag;
