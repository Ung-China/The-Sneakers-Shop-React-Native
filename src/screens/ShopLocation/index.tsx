import React, {useRef} from 'react';
import {View, Text, FlatList, Platform} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {locationItemProps, StackParamList} from '../../types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useShopLocation, useTheme} from '../../hooks';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icons} from '../../constants';
import IconButton from '../../components/IconButton';
import styles from './style';
import {BottomSheet, LocationItem, Skeleton} from '../../components';
import {OpenMapModal} from './components';

const ShopLocation: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const route = useRoute<RouteProp<StackParamList, 'ShopLocation'>>();

  const {shopAddress} = route.params;

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

  const locationItem = ({item}: {item: locationItemProps['item']}) => {
    return <LocationItem item={item} onPress={handleOpenMapModalSheet} />;
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.mapViewContainer}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapColors}
        loadingEnabled
        mapPadding={{
          top: 0,
          right: 0,
          bottom: 150,
          left: 0,
        }}
        initialRegion={{
          latitude: shopAddress[0].latitude,
          longitude: shopAddress[0].longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        <Marker
          key={shopAddress.id}
          coordinate={{
            latitude: shopAddress[0].latitude,
            longitude: shopAddress[0].longitude,
          }}>
          <View style={[styles.markerContainer]}>
            <View style={styles.marker}>
              <Text style={styles.markerText}>{shopAddress[0].name}</Text>
            </View>
            <Icons.LOGO width={50} height={50} />
          </View>
        </Marker>
      </MapView>

      <View style={styles.locationContainer}>
        <FlatList
          data={shopAddress}
          horizontal
          pagingEnabled
          renderItem={locationItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.locationContentContainer}
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
