import React, {useRef} from 'react';
import {View, Text, FlatList, Platform} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {locationItemProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useConfig, useShopLocation, useTheme} from '../../hooks';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icons, Radius, Screen_Dimensions} from '../../constants';
import IconButton from '../../components/IconButton';
import styles from './style';
import {BottomSheet, LocationItem, Skeleton} from '../../components';
import {OpenMapModal} from './components';
import {locations} from '../../models/Location';

const ShopLocation: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {colors, mapColors} = useTheme();
  const {isLoading, configs} = useConfig();

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

  const locationItem = ({item}: {item: locationItemProps['item']}) => {
    return <LocationItem item={item} onPress={handleOpenMapModalSheet} />;
  };

  const locationItemSkeleton = () => {
    return (
      <Skeleton
        containerStyle={{
          borderRadius: Radius.DEFAULT,
          height: 150,
          width: Screen_Dimensions.WIDTH - 30,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.mapViewContainer}
        provider={PROVIDER_GOOGLE}
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
          latitude: configs?.shopAddress[0].latitude,
          longitude: configs?.shopAddress[0].longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        {configs?.shopAddress.map((location, index) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}>
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
        {isLoading ? (
          <FlatList
            data={locations}
            horizontal
            pagingEnabled
            renderItem={locationItemSkeleton}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.locationContentContainer}
          />
        ) : (
          <FlatList
            data={configs?.shopAddress}
            horizontal
            pagingEnabled
            renderItem={locationItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.locationContentContainer}
          />
        )}
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
