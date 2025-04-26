import {Text, View} from 'react-native';
import {CheckoutItemProps} from '../../types/CheckoutItem';
import styles from './style';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import IconButton from '../IconButton';
import {Icons, Radius} from '../../constants';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../hooks';
import currencyFormat from '../../helpers/CurrencyFormat';

const CheckoutItem: React.FC<CheckoutItemProps> = ({item}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <CachedImage
        source={item.imageUrl}
        style={[styles.imageStyle, {backgroundColor: colors.white}]}
        imageStyle={{borderRadius: Radius.DEFAULT}}
        loadingImageComponent={() => (
          <LoadingImage iconSize={50} imageStyle={styles.loadingImagestyle} />
        )}
      />
      <View style={styles.hero}>
        <Text style={[styles.name, {color: colors.text}]}>{item.name}</Text>

        <Text style={[styles.size, {color: colors.text}]}>
          {t('size')} {item.variant?.size}
        </Text>
        <View style={styles.footerContainer}>
          <Text style={[styles.price, {color: colors.text}]}>
            ${currencyFormat(item.price)}
          </Text>
          <View style={[styles.quantityContainer]}>
            <Text style={styles.quantity}>10</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutItem;
