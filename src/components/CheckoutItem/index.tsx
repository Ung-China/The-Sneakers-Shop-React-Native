import {Text, View} from 'react-native';
import {CheckoutItemProps} from '../../types/CheckoutItem';
import styles from './style';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {Icons, Radius} from '../../constants';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../hooks';
import PriceTag from '../PriceTag';
import {HistoryProductPromotionChecker} from '../../helpers';

const CheckoutItem: React.FC<CheckoutItemProps> = ({item}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const {hasProductPromotion, finalPrice} = HistoryProductPromotionChecker({
    price: item.price,
    discount: item.discount,
    discountType: item.discountType,
  });

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

      {hasProductPromotion && (
        <View style={styles.promotionContainer}>
          <Icons.DISCOUNTTAG width={40} height={40} color={'red'} />
          <View style={styles.promotionWrapper}>
            <Text style={styles.value}>
              {item.discount}
              {item.discountType === 'percent' ? '%' : '$'}
            </Text>
            <Text style={styles.discountText}>OFF</Text>
          </View>
        </View>
      )}
      <View style={styles.hero}>
        <Text style={[styles.name, {color: colors.text}]}>{item.name}</Text>

        <Text style={[styles.size, {color: colors.text}]}>
          {t('size')} {item.size}
        </Text>
        <View style={styles.footerContainer}>
          <Text style={[styles.price, {color: colors.text}]}>
            <PriceTag
              finalPrice={finalPrice}
              defaultPrice={hasProductPromotion ? item.price : null}
            />
          </Text>
        </View>
      </View>
      <View style={[styles.quantityContainer]}>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </View>
  );
};

export default CheckoutItem;
