import {Text, View} from 'react-native';
import styles from './style';
import {FlexibleTabItemProps} from '../../types/FlexibleTabItem';
import Touchable from '../Touchable';
import {CachedImage} from '@georstat/react-native-image-cache';
import {Radius} from '../../constants';
import LoadingImage from '../LoadingImage';
import {useTheme} from '../../hooks';

const FlexibleTabItem: React.FC<FlexibleTabItemProps> = ({
  item,
  onPress,
  activeId,
}) => {
  const {colors} = useTheme();

  return (
    <Touchable
      onPress={onPress}
      style={[
        styles.contaner,
        {
          backgroundColor: colors.secondary,
          borderWidth: activeId === item.id ? 1.5 : 0,
          borderColor: activeId === item.id ? colors.text : 'transparent',
        },
      ]}>
      <View style={[styles.imageContainer, {backgroundColor: colors.white}]}>
        <CachedImage
          source={item.imageUrl}
          style={[styles.imageStyle]}
          imageStyle={{borderRadius: Radius.DEFAULT}}
          loadingImageComponent={() => (
            <LoadingImage iconSize={50} imageStyle={styles.loadingImageStyle} />
          )}
        />
      </View>
      <Text style={[styles.name, {color: colors.text}]}>{item.name}</Text>
    </Touchable>
  );
};

export default FlexibleTabItem;
