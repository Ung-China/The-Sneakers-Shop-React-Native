import {useEffect, useState} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import {
  request,
  PERMISSIONS,
  RESULTS,
  PermissionStatus,
} from 'react-native-permissions';

const useLocationPermission = (): boolean => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        const result: PermissionStatus = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );
        setHasPermission(result === RESULTS.GRANTED);
      }
    } catch (error) {
      console.warn('Error requesting location permission:', error);
      setHasPermission(false);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return hasPermission;
};

export default useLocationPermission;
