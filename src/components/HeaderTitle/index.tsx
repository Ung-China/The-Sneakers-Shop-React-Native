import {Text, View} from 'react-native';
import {HeaderTitleProps} from './headerTitleProps';
import styles from './style';
import {useTheme} from '../../hooks';

const HeaderTitleComponent: React.FC<HeaderTitleProps> = ({
  title,
  titleStyle,
  containerStyle,
}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle, {color: colors.text}]}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitleComponent;
