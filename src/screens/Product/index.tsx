import {Alert, FlatList, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useProduct, useTheme} from '../../hooks';
import {
  FlexibleSwiper,
  Footer,
  ItemSeparatorHeight,
  ProductItem,
  Section,
  Touchable,
  VariantItem,
} from '../../components';
import {products} from '../../models/Product';
import IconButton from '../../components/IconButton';
import {Icons, Spacing} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductItemProps, StackParamList, VariantProps} from '../../types';
import PriceTag from '../../components/PriceTag';
import RatingTag from '../../components/RatingTag';
import {variants} from '../../models/Variant';
const ProductDetailScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {activeVariant, toggleVariant} = useProduct();

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const navigateBack = () => {
    return navigation.goBack();
  };

  const navigateToCart = () => {
    return navigation.navigate('Cart');
  };

  const toggleFavorite = () => {
    return Alert.alert('Toggle Favorite');
  };

  const addToCart = () => {
    return Alert.alert('Add to cart');
  };

  const goToCheckout = () => {
    return Alert.alert('Go to checkout');
  };

  const variantItem = ({
    item,
    index,
  }: {
    item: VariantProps['item'];
    index: number;
  }) => {
    return (
      <VariantItem
        onPress={() => toggleVariant(index)}
        item={item}
        isActive={activeVariant === index}
        containerStyle={{marginLeft: Spacing.DEFAULT}}
      />
    );
  };

  const productItem = ({
    item,
    index,
  }: {
    item: ProductItemProps['item'];
    index: number;
  }) => {
    return (
      <ProductItem
        item={item}
        onPress={handlePressOnProduct}
        wrapperStyle={[
          styles.productWrapper,
          {marginRight: index % 2 === 0 ? Spacing.DEFAULT : 0},
        ]}
      />
    );
  };

  const handlePressOnProduct = () => {
    return Alert.alert('Go to product detail');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlexibleSwiper
          imageUrlList={products[0].galleries}
          imageStyle={[
            styles.swiperImageStyle,
            {backgroundColor: colors.primary},
          ]}
          containerStyle={[
            styles.swiperContainer,
            {backgroundColor: colors.primary},
          ]}
          loadingImageStyle={[
            styles.swiperLoadingImageStyle,
            {backgroundColor: colors.primary},
          ]}
          iconSize={150}
          autoPlay={false}
          resizeMode="contain"
        />
        <IconButton
          onPress={navigateBack}
          icon={<Icons.ARROWLEFT color={colors.text} width={23} height={23} />}
          style={[styles.backContainer]}
        />
        <IconButton
          onPress={navigateToCart}
          icon={<Icons.CART color={colors.text} width={25} height={25} />}
          style={[styles.cartContainer]}
        />
        <View style={styles.body}>
          <View
            style={[styles.container1, {backgroundColor: colors.secondary}]}>
            <IconButton
              onPress={toggleFavorite}
              icon={<Icons.HEART color={colors.text} />}
              style={[styles.heartContainer, {backgroundColor: colors.primary}]}
            />

            <Text style={[styles.name, {color: colors.text}]}>
              {products[0].name}
            </Text>

            <View style={styles.priceContaner}>
              <PriceTag
                price={300}
                promotion={100}
                priceStyle={styles.priceStyle}
                defaultPriceStyle={styles.defaultPriceStyle}
              />

              <View
                style={[
                  styles.discountContainer,
                  {backgroundColor: colors.primary},
                ]}>
                <Text style={[styles.discount, {color: colors.text}]}>
                  5% OFF
                </Text>
              </View>
            </View>

            <RatingTag
              averageRating={2}
              totalRating={5}
              averageRatingStyle={styles.averageRatingStyle}
              totalRatingStyle={styles.totalRatingStyle}
            />
          </View>

          <View
            style={[styles.container2, {backgroundColor: colors.secondary}]}>
            <Text style={[styles.description, {color: colors.text}]}>
              {t('description')}
            </Text>
            <Text style={[styles.descriptionValue, {color: colors.text}]}>
              Experience unmatched comfort and modern style with the Nike Air
              Max 270. Designed with the tallest Air unit in the heel, this shoe
              provides exceptional cushioning for all-day wear.
            </Text>
          </View>

          <View
            style={[styles.container3, {backgroundColor: colors.secondary}]}>
            <Text style={[styles.selectOption, {color: colors.text}]}>
              {t('selectOption')}
            </Text>
            <FlatList
              data={variants}
              renderItem={variantItem}
              numColumns={3}
              scrollEnabled={false}
              ItemSeparatorComponent={ItemSeparatorHeight}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </View>

        <Section title={t('relatedProduct')} titleStyle={styles.titleStyle}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={productItem}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={item => item.id.toString()}
          />
        </Section>
      </ScrollView>
      <Footer
        contentContainerStyle={[
          styles.footerContainer,
          {
            backgroundColor: colors.primary,
            borderColor: colors.grey,
          },
        ]}>
        <Touchable
          onPress={addToCart}
          style={[styles.buttonAddToCart, {backgroundColor: colors.secondary}]}>
          <Text style={[styles.addToCart, {color: colors.text}]}>
            {t('addToCart')}
          </Text>
        </Touchable>
        <Touchable
          onPress={goToCheckout}
          style={[
            styles.buttonAddToCart,
            {backgroundColor: colors.primaryReversed},
          ]}>
          <Text style={[styles.addToCart, {color: colors.textReversed}]}>
            {t('buyNow')}
          </Text>
        </Touchable>
      </Footer>
    </View>
  );
};

export default ProductDetailScreen;
