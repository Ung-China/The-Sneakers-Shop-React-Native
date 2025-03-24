import {Text, View} from 'react-native';
import styles from './style';
import {useCart, useTheme} from '../../hooks';
import FlexibleTouchable from '../FlexibleTouchable';
import IconButton from '../IconButton';
import {Icons} from '../../constants';
import {HomeHeaderProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const HomeHeader: React.FC<HomeHeaderProps> = ({
  item,
  handlePressToShopLocation,
}) => {
  const {colors} = useTheme();
  const {cartItemsCount} = useCart();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const handlePressToNotifications = () => {
    navigation.navigate('Notification');
  };

  const handlePressToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <View style={styles.leadingContainer}>
        <FlexibleTouchable
          onPress={handlePressToShopLocation}
          label={item.currentLocation}
          labelStyle={{color: colors.text}}
        />
      </View>
      <View style={styles.actionContainer}>
        <IconButton
          onPress={handlePressToShopLocation}
          icon={<Icons.MAP height={30} width={30} color={colors.icon} />}
        />
        <IconButton
          onPress={handlePressToNotifications}
          icon={
            <Icons.NOTIFICATION height={30} width={30} color={colors.icon} />
          }
        />
        <IconButton
          onPress={handlePressToCart}
          icon={<Icons.CART height={30} width={30} color={colors.icon} />}
        />
        {cartItemsCount > 0 && (
          <View style={styles.qunatityContainer}>
            <Text style={styles.quantity}>{cartItemsCount}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeHeader;
