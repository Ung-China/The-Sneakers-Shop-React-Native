import {Text, View} from 'react-native';
import {BrandProps} from '../../types';
import styles from './style';
import Touchable from '../Touchable';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {Radius} from '../../constants';
import {useTheme} from '../../hooks';

const BrandItem: React.FC<BrandProps> = ({item, onPress}) => {
  const {colors} = useTheme();

  return (
    <Touchable
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.secondary}]}>
      <View style={[styles.imageContainer, {backgroundColor: colors.white}]}>
        <CachedImage
          source={item.image}
          style={[styles.imageStyle]}
          imageStyle={{borderRadius: Radius.DEFAULT}}
          loadingImageComponent={() => (
            <LoadingImage
              iconSize={100}
              imageStyle={styles.loadingImageStyle}
            />
          )}
        />
      </View>

      <Text style={[styles.name, {color: colors.text}]} numberOfLines={1}>
        {item.name}
      </Text>
    </Touchable>
  );
};

export default BrandItem;
