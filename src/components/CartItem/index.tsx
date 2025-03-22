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

const CartItem: React.FC<CartItemProps> = ({
  item,
  onPress,
  isCheckout = false,
  onDelete,
  onDecrease,
  onIncrease,
}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();

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
            <Text style={[styles.name, {color: colors.text}]}>{item.name}</Text>

            <Text style={[styles.size, {color: colors.text}]}>
              {t('size')} {item.variantName}
            </Text>

            <View style={styles.footerContainer}>
              <Text style={[styles.price, {color: colors.text}]}>
                ${currencyFormat(item.price)}
              </Text>
              <View style={styles.quantityContainer}>
                <Text style={[styles.quantity, {color: colors.text}]}>x10</Text>
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
              <View style={styles.hero}>
                <View style={styles.heroHeader}>
                  <Text style={[styles.name, {color: colors.text}]}>
                    {item.name}
                  </Text>
                  <IconButton onPress={onDelete} icon={<Icons.CLOSE />} />
                </View>

                <Text style={[styles.size, {color: colors.text}]}>
                  {t('size')} {item.variantName}
                </Text>

                <View style={styles.footerContainer}>
                  <Text style={[styles.price, {color: colors.text}]}>
                    ${currencyFormat(item.price)}
                  </Text>
                  <View style={styles.quantityContainer}>
                    <IconButton onPress={onDecrease} icon={<Icons.MINUS />} />
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
