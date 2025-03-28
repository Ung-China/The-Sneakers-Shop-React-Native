import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Animated, Platform} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {locationItemProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useShopLocation, useTheme} from '../../hooks';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icons, Screen_Dimensions} from '../../constants';
import IconButton from '../../components/IconButton';
import styles from './style';
import {locations} from '../../models/Location';
import {BottomSheet, LocationItem} from '../../components';
import Carousel from 'react-native-reanimated-carousel';
import {OpenMapModal} from './components';

const ShopLocation: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {t} = useTranslation();
  const {colors, mapColors} = useTheme();

  const {
    bottomSheetOpenMapModalRef,
    handleOpenMapSheetChanges,
    handleOpenModalSheetDismiss,
    handleOpenMapModalSheet,
    latitude,
    longitude,
    name,
  } = useShopLocation();

  const navigateBack = () => navigation.goBack();

  const mapRef = useRef<MapView | null>(null);
  const flatListRef = useRef<FlatList | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const scaleAnimations = useRef(
    locations.map(() => new Animated.Value(1)),
  ).current;

  const onCardPress = (index: number) => {
    setSelectedLocation(index);

    scaleAnimations.forEach((animation, i) => {
      Animated.timing(animation, {
        toValue: i === index ? 1.5 : 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });

    const location = locations[index];

    mapRef.current?.animateToRegion(
      {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
      350,
    );

    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  const locationItem = ({item}: {item: locationItemProps['item']}) => {
    return <LocationItem item={item} onPress={handleOpenMapModalSheet} />;
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.mapViewContainer}
        // provider={PROVIDER_GOOGLE}
        customMapStyle={mapColors}
        showsUserLocation
        showsMyLocationButton
        mapPadding={{
          top: 0,
          right: 0,
          bottom: 150,
          left: 0,
        }}
        initialRegion={{
          latitude: locations[0].latitude,
          longitude: locations[0].longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        {locations.map((location, index) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            // onPress={() => onCardPress(index)}
          >
            <View style={[styles.markerContainer]}>
              <View style={styles.marker}>
                <Text style={styles.markerText}>{location.name}</Text>
              </View>
              <Icons.LOGO width={50} height={50} />
            </View>
          </Marker>
        ))}
      </MapView>

      <View style={styles.locationContainer}>
        <Carousel
          pagingEnabled
          loop={false}
          width={Screen_Dimensions.WIDTH}
          height={Screen_Dimensions.WIDTH / 2.6}
          data={locations}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 45,
          }}
          scrollAnimationDuration={200}
          onSnapToItem={index => onCardPress(index)}
          renderItem={locationItem}
        />
      </View>
      <IconButton
        onPress={navigateBack}
        icon={
          Platform.OS === 'ios' ? (
            <Icons.ARROWLEFT color={colors.text} width={23} height={23} />
          ) : (
            <Icons.LEFTARROWANDROID
              color={colors.text}
              width={30}
              height={30}
            />
          )
        }
        style={[styles.backContainer]}
      />

      <BottomSheet
        bottomSheetModalRef={bottomSheetOpenMapModalRef}
        onSheetChanges={handleOpenMapSheetChanges}
        handleSheetDismiss={handleOpenModalSheetDismiss}
        enableDynamicSizing={true}
        content={
          <OpenMapModal
            handleDismissModal={handleOpenModalSheetDismiss}
            latitude={latitude}
            longitude={longitude}
            name={name}
          />
        }
      />
    </View>
  );
};

export default ShopLocation;
