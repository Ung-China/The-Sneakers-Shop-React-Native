import {SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import FlexibleTouchable from '../../components/FlexibleTouchable';
import {useNavigation} from '@react-navigation/native';
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../types';

const OrderSuccessScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView
      style={[styles.safeContainer, {backgroundColor: colors.primary}]}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('orderSuccessTitle')}</Text>
        <Text style={styles.description}>{t('orderSuccessDescription')}</Text>

        <FlexibleTouchable
          label={t('backToHome')}
          labelStyle={
            (styles.labelStyle,
            {color: colors.textReversed, textAlign: 'center'})
          }
          containerStyle={{backgroundColor: colors.primaryReversed}}
          onPress={handleBackToHome}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccessScreen;
