import {Text, View} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import {SectionProps} from '../../types';

const Section: React.FC<SectionProps> = ({
  children,
  title,
  actionButton,
  titleStyle,
  headerStyle,
  containerStyle,
  price,
  priceAfterDicount,
  priceStyle,
  priceAfterDicountStyle,
}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.header, headerStyle]}>
        <Text style={[styles.title, titleStyle, {color: colors.text}]}>
          {title}
        </Text>
        {actionButton ? (
          actionButton
        ) : (
          <View style={styles.row}>
            <Text style={[priceStyle]}>{price}</Text>
            {priceAfterDicount ? (
              <Text style={priceAfterDicountStyle}>{priceAfterDicount}</Text>
            ) : null}
          </View>
        )}
      </View>
      {children && children}
    </View>
  );
};

export default Section;
