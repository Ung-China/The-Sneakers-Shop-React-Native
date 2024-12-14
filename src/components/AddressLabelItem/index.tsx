import {Text} from 'react-native';
import {AddressLabelItemProps} from '../../types';
import Touchable from '../Touchable';
import styles from './style';
import {useTheme} from '../../hooks';

const AddressLabelItem: React.FC<AddressLabelItemProps> = ({
  onPress,
  isActive,
  item,
}) => {
  const {colors} = useTheme();
  return (
    <Touchable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isActive
            ? colors.secondaryReversed
            : colors.secondary,
        },
      ]}>
      <Text
        style={[
          styles.name,
          {color: isActive ? colors.textReversed : colors.text},
        ]}>
        {item.name}
      </Text>
    </Touchable>
  );
};
export default AddressLabelItem;
