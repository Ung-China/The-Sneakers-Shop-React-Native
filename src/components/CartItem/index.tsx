import {Alert, Text, View} from 'react-native';
import styles from './style';
import {CartItemProps} from '../../types';
import Touchable from '../Touchable';
import {CachedImage} from '@georstat/react-native-image-cache';
import {useTheme} from '../../hooks';
import {Icons, Radius} from '../../constants';
import LoadingImage from '../LoadingImage';
import {Swipeable} from 'react-native-gesture-handler';
import currencyFormat from '../../helpers/CurrencyFormat';
import {useTranslation} from 'react-i18next';
import IconButton from '../IconButton';

const CartItem: React.FC<CartItemProps> = ({item, onPress}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const handleOnPressDelete = () => {
    return Alert.alert('Delete this product from cart');
  };

  const handleOnPressIncreaseQTY = () => {
    return Alert.alert('Increase quantity');
  };
  const handleOnPressDecreaseQTY = () => {
    return Alert.alert('Decrease quantity');
  };
  const rightAction = () => {
    return (
      <Touchable onPress={handleOnPressDelete}>
        <View style={styles.rightActionContainer}>
          <Icons.TRASH color="white" width={30} height={25} />
        </View>
      </Touchable>
    );
  };

  return (
    <Touchable onPress={onPress}>
      <Swipeable
        renderRightActions={rightAction}
        containerStyle={styles.swipeableContainer}>
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
          <View style={styles.hero}>
            <View style={styles.heroHeader}>
              <Text style={[styles.name, {color: colors.text}]}>
                {item.name}
              </Text>
              <IconButton
                onPress={handleOnPressDelete}
                icon={<Icons.CLOSE />}
              />
            </View>

            <Text style={[styles.size, {color: colors.text}]}>
              {t('size')} {item.variant?.size}
            </Text>

            <View style={styles.footerContainer}>
              <Text style={[styles.price, {color: colors.text}]}>
                ${currencyFormat(item.price)}
              </Text>
              <View style={styles.quantityContainer}>
                <IconButton
                  onPress={handleOnPressDecreaseQTY}
                  icon={<Icons.MINUS />}
                />
                <Text style={[styles.quantity, {color: colors.text}]}>10</Text>
                <IconButton
                  onPress={handleOnPressIncreaseQTY}
                  icon={<Icons.PLUS />}
                />
              </View>
            </View>
          </View>
        </View>
      </Swipeable>
    </Touchable>
  );
};

export default CartItem;
