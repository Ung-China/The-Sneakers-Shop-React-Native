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
import React from 'react';
import {ProductPromotionChecker} from '../../helpers';
import PriceTag from '../PriceTag';

const CartItem: React.FC<CartItemProps> = ({
  item,
  onPress,
  isCheckout = false,
  onDelete,
  onDecrease,
  onIncrease,
  notifications,
}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const {hasProductPromotion, finalPrice, discountType, discountValue} =
    ProductPromotionChecker({
      productId: item.id,
      defaultPrice: item.price,
      promotions: notifications,
      brandId: item.brandId,
    });

  const rightAction = () => {
    return (
      <Touchable onPress={onDelete}>
        <View style={styles.rightActionContainer}>
          <Icons.TRASH color="white" width={30} height={25} />
        </View>
      </Touchable>
    );
  };

  return (
    <>
      {isCheckout ? (
        <View style={[styles.container, {backgroundColor: colors.secondary}]}>
          <CachedImage
            source={item.image}
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
            <Text
              numberOfLines={1}
              style={[styles.name, {color: colors.text, width: '95%'}]}>
              {item.name}
            </Text>

            <Text style={[styles.size, {color: colors.text}]}>
              {t('size')} {item.variantName}
            </Text>

            <View style={styles.footerContainer}>
              <PriceTag
                finalPrice={finalPrice}
                defaultPrice={hasProductPromotion ? item.price : null}
              />
              <View style={styles.quantityContainer}>
                <Text style={[styles.quantity, {color: colors.text}]}>
                  x {item.quantity}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Touchable onPress={onPress}>
          <Swipeable renderRightActions={rightAction}>
            <View
              style={[styles.container, {backgroundColor: colors.secondary}]}>
              <CachedImage
                source={item.image}
                style={[styles.imageStyle, {backgroundColor: colors.white}]}
                imageStyle={{borderRadius: Radius.DEFAULT}}
                loadingImageComponent={() => (
                  <LoadingImage
                    iconSize={50}
                    imageStyle={styles.loadingImagestyle}
                  />
                )}
              />

              {hasProductPromotion && (
                <View style={styles.promotionContainer}>
                  <Icons.DISCOUNTTAG width={40} height={40} color={'red'} />
                  <View style={styles.promotionWrapper}>
                    <Text style={styles.value}>
                      {discountValue}
                      {discountType === 'percent' ? '%' : '$'}
                    </Text>
                    <Text style={styles.discountText}>OFF</Text>
                  </View>
                </View>
              )}

              <View style={styles.hero}>
                <View style={styles.heroHeader}>
                  <Text
                    numberOfLines={1}
                    style={[styles.name, {color: colors.text, flex: 1}]}>
                    {item.name}
                  </Text>
                  <IconButton onPress={onDelete} icon={<Icons.CLOSE />} />
                </View>

                <Text style={[styles.size, {color: colors.text}]}>
                  {t('size')} {item.variantName}
                </Text>

                <View style={styles.footerContainer}>
                  <PriceTag
                    finalPrice={finalPrice}
                    defaultPrice={hasProductPromotion ? item.price : null}
                  />
                  <View style={styles.quantityContainer}>
                    <IconButton
                      onPress={item.quantity === 1 ? onDelete : onDecrease}
                      icon={<Icons.MINUS />}
                    />

                    <Text style={[styles.quantity, {color: colors.text}]}>
                      {item.quantity}
                    </Text>

                    <IconButton onPress={onIncrease} icon={<Icons.PLUS />} />
                  </View>
                </View>
              </View>
            </View>
          </Swipeable>
        </Touchable>
      )}
    </>
  );
};

export default CartItem;
