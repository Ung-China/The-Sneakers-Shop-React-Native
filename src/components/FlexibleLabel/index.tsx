import {Text, View} from 'react-native';
import styles from './style';
import {FlexibleLabelProps} from '../../types';

const FlexibleLabel: React.FC<FlexibleLabelProps> = ({
  label,
  value,
  containerStyle,
  labelStyle,
  valueStyle,
  showDollar = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <Text style={[styles.value, valueStyle]}>
        {showDollar && showDollar ? '$' : ''}
        {value}
      </Text>
    </View>
  );
};

export default FlexibleLabel;
