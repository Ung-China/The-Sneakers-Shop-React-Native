import {BackHandler, SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import FlexibleTouchable from '../../components/FlexibleTouchable';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../types';
import {useEffect} from 'react';

const OrderSuccessScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  const handleBackToHome = () => {
    navigation.navigate('Home', {shouldRefetch: true});
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      navigation.navigate('Home', {shouldRefetch: true});
    });

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('Home', {shouldRefetch: true});
        return true;
      },
    );

    return () => {
      unsubscribe();
      backHandler.remove();
    };
  }, [navigation]);

  return (
    <SafeAreaView
      style={[styles.safeContainer, {backgroundColor: colors.primary}]}>
      <View style={styles.container}>
        <Text style={[styles.title, {color: colors.primaryReversed}]}>
          {t('orderSuccessTitle')}
        </Text>
        <Text style={[styles.description, {color: colors.primaryReversed}]}>
          {t('orderSuccessDescription')}
        </Text>

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
