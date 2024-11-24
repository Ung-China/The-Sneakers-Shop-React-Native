import {Text, View} from 'react-native';
import Touchable from '../Touchable';
import styles from './style';
import {FlatButtonProps} from '../../types';

const FlatButton: React.FC<FlatButtonProps> = ({
  prefixIcon,
  label,
  sufixIcon,
  wrapperStyle,
  containerStyle,
  labelStyle,
  onPress,
}) => {
  return (
    <Touchable style={[styles.wrapper, wrapperStyle]} onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.leadingContainer}>
          {prefixIcon && prefixIcon}
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
        {sufixIcon && sufixIcon}
      </View>
    </Touchable>
  );
};

export default FlatButton;
