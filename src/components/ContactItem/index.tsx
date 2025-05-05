import React from 'react';
import {Linking, Alert} from 'react-native';
import styles from './style';
import {ContactItemProps} from '../../types';
import {CachedImage} from '@georstat/react-native-image-cache';
import Touchable from '../Touchable';

const ContactItem: React.FC<ContactItemProps> = ({item}) => {
  const handlePress = async () => {
    console.log('Pressed item:', item);
    let url = item.link;

    if (!url.startsWith('http') && !url.startsWith('tel:')) {
      if (/^\d+$/.test(url)) {
        url = `tel:${url}`;
      } else {
        url = `https://${url}`;
      }
    }

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Can't open this link", url);
      }
    } catch (error) {
      console.warn('Error opening link:', error);
      Alert.alert('An error occurred', String(error));
    }
  };

  return (
    <Touchable style={styles.container} onPress={handlePress}>
      <CachedImage source={item.icon} style={styles.imageStyle} />
    </Touchable>
  );
};

export default ContactItem;
