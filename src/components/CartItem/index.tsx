import {Alert, Text, View} from 'react-native';
import styles from './style';
import {CartItemProps} from '../../types';
import Touchable from '../Touchable';
import {CachedImage} from '@georstat/react-native-image-cache';
import {useTheme} from '../../hooks';
import {Icons, Radius} from '../../constants';
import LoadingImage from '../LoadingImage';
import {Swipeable} from 'react-native-gesture-handler';
import style from './style';

const CartItem: React.FC<CartItemProps> = ({item, onPress}) => {
  const {colors} = useTheme();

  const handleOnPressDelete = () => {
    return Alert.alert('Delete this product from cart');
  };
  const rightAction = () => {
    return (
      <Touchable onPress={handleOnPressDelete}>
        <View style={style.rightActionContainer}>
          <Icons.TRASH color="white" width={30} height={25} />
        </View>
      </Touchable>
    );
  };

  return (
    <Touchable onPress={onPress}>
      <Swipeable
        renderRightActions={rightAction}
        containerStyle={style.swipeableContainer}>
        <View style={[styles.container, {backgroundColor: colors.secondary}]}>
          <CachedImage
            source={item.imageUrl}
            style={[styles.imageStyle, {backgroundColor: colors.white}]}
            imageStyle={{borderRadius: Radius.DEFAULT}}
            loadingImageComponent={() => (
              <LoadingImage
                iconSize={50}
                imageStyle={styles.loadingImagestyle}
              />
            )}
          />

          <Text>{item.name}</Text>
          <Text>{item.variant?.size}</Text>
          <Text>{item.price}</Text>
        </View>
      </Swipeable>
    </Touchable>
  );
};

export default CartItem;
