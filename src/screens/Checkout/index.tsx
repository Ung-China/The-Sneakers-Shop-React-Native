import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {useTheme} from '../../hooks';
import {ScrollView} from 'react-native';
import styles from './style';

const CheckoutScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor: colors.primary}]}>
        <View>
          <Text>{t('chooseDeliveryOption')}</Text>
          <Text>{t('selectOneBelowToContinues')}</Text>
        </View>
      </ScrollView>
    </>
  );
};
export default CheckoutScreen;
