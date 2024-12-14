import {Text, View} from 'react-native';
import styles from './style';
import Touchable from '../Touchable';
import {Icons} from '../../constants';
import {useTheme} from '../../hooks';
import {DeliveryProps} from '../../types';

const AddressItem: React.FC<DeliveryProps> = ({item, onPress, isActive}) => {
  const {colors} = useTheme();
  return (
    <Touchable
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.secondary}]}>
      {isActive ? (
        <Icons.RadioFill width={20} height={20} color={colors.text} />
      ) : (
        <Icons.RADIO width={20} height={20} color={colors.text} />
      )}
      <View style={styles.body}>
        <Text style={[styles.label, {color: colors.text}]}>{item.label}</Text>
        <Text style={[styles.streetLine, {color: colors.grey}]}>
          {item.streetLine1}
        </Text>
        <Text style={[styles.streetLine, {color: colors.grey}]}>
          {item.streetLine2} - {item.phoneNumber}
        </Text>
      </View>
    </Touchable>
  );
};

export default AddressItem;
