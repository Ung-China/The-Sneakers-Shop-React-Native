import {Text, View} from 'react-native';
import {VariantProps} from '../../types';
import Touchable from '../Touchable';
import currencyFormat from '../../helpers/CurrencyFormat';
import styles from './style';

const VariantItem: React.FC<VariantProps> = ({
  item,
  onPress,
  isActive,
  containerStyle,
}) => {
  return (
    <Touchable onPress={onPress}>
      <View
        style={[
          styles.container,
          containerStyle,
          {backgroundColor: isActive ? 'black' : 'white'},
        ]}>
        <Text style={[styles.size, {color: isActive ? 'white' : 'black'}]}>
          {item.size}
        </Text>
        <Text style={[styles.price, {color: isActive ? 'white' : 'black'}]}>
          ${currencyFormat(item.price)}
        </Text>
      </View>
    </Touchable>
  );
};

export default VariantItem;
