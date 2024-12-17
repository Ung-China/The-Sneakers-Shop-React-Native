import {Text, View} from 'react-native';
import styles from './style';
import Touchable from '../Touchable';
import {OptionItemProps} from '../../types';
import {useTheme} from '../../hooks';
import {Icons} from '../../constants';

const OptionItem: React.FC<OptionItemProps> = ({
  onPress,
  prefixIcon,
  title,
  description,
  isActive,
  contentContainer,
}) => {
  const {colors} = useTheme();
  return (
    <Touchable
      style={[styles.container, {backgroundColor: colors.secondary}]}
      onPress={onPress}>
      <View style={contentContainer}>
        <View>{prefixIcon}</View>
        <View style={styles.body}>
          <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
          <Text style={[styles.description, {color: colors.grey}]}>
            {description}
          </Text>
        </View>
      </View>

      {isActive ? (
        <Icons.RadioFill width={20} height={20} color={colors.text} />
      ) : (
        <Icons.RADIO width={20} height={20} color={colors.text} />
      )}
    </Touchable>
  );
};
export default OptionItem;
