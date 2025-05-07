import {Text, View} from 'react-native';
import styles from './style';
import Touchable from '../Touchable';
import {LogisticProps} from '../../types';
import {useTheme} from '../../hooks';

const LogisticItem: React.FC<LogisticProps> = ({
  item,
  onPress,
  isActive,
  containerStyle,
}) => {
  const {colors} = useTheme();

  return (
    <Touchable onPress={onPress}>
      <View
        style={[
          styles.container,
          containerStyle,
          {backgroundColor: isActive ? colors.primaryReversed : colors.primary},
        ]}>
        <Text
          style={[
            styles.name,
            {color: isActive ? colors.textReversed : colors.text},
          ]}>
          {item.name}
        </Text>
      </View>
    </Touchable>
  );
};

export default LogisticItem;
