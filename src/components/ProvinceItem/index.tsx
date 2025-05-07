import {Text} from 'react-native';
import {ProvinceItemProps} from '../../types';
import Touchable from '../Touchable';
import {useTheme} from '../../hooks';
import styles from './style';

const ProvinceItem: React.FC<ProvinceItemProps> = ({
  item,
  onPress,
  isActive,
}) => {
  const {colors} = useTheme();

  return (
    <Touchable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isActive ? colors.primaryReversed : colors.primary,
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

export default ProvinceItem;
