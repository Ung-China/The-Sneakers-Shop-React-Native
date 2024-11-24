import {Alert, Text, View} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import FlexibleTouchable from '../FlexibleTouchable';
import IconButton from '../IconButton';
import {Icons} from '../../constants';
import {HomeHeaderProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const HomeHeader: React.FC<HomeHeaderProps> = ({item}) => {
  const {colors} = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const handlePressToMap1 = () => {
    return Alert.alert('Go to Map');
  };
  const handlePressToMap2 = () => {
    return Alert.alert('Go to Map');
  };
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
          onPress={handlePressToMap1}
          label={item.currentLocation}
          labelStyle={{color: colors.text}}
        />
      </View>
      <View style={styles.actionContainer}>
        <IconButton
          onPress={handlePressToMap2}
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
      </View>
    </View>
  );
};

export default HomeHeader;
