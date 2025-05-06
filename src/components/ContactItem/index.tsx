import React from 'react';
import {Linking, Alert, Platform} from 'react-native';
import styles from './style';
import {ContactItemProps} from '../../types';
import {CachedImage} from '@georstat/react-native-image-cache';
import Touchable from '../Touchable';

const ContactItem: React.FC<ContactItemProps> = ({item}) => {
  const handlePress = async () => {
    console.log('Pressed item:', item);

    if (!item.link) {
      return;
    }

    if (item.title === 'Facebook') {
      const facebookAppUrl = `fb://facewebmodal/f?href=${encodeURIComponent(
        item.link,
      )}`;
      const facebookWebUrl = item.link;

      try {
        const canOpenApp = await Linking.canOpenURL(facebookAppUrl);
        if (canOpenApp) {
          await Linking.openURL(facebookAppUrl);
        } else {
          await Linking.openURL(facebookWebUrl);
        }
      } catch (error) {
        console.error('Error opening Facebook:', error);
        Alert.alert('Error', 'Unable to open Facebook');
      }
    } else if (item.title === 'Telegram') {
      const username = item.link.replace('https://t.me/', '');
      const telegramAppUrl = `tg://resolve?domain=${username}`;
      const telegramWebUrl = item.link;

      try {
        const canOpenApp = await Linking.canOpenURL(telegramAppUrl);
        if (canOpenApp) {
          await Linking.openURL(telegramAppUrl);
        } else {
          await Linking.openURL(telegramWebUrl);
        }
      } catch (error) {
        console.error('Error opening Telegram:', error);
        Alert.alert('Error', 'Unable to open Telegram');
      }
    } else if (item.title === 'Instagram') {
      const username = item.link.split('/').pop();
      const instagramAppUrl = `instagram://user?username=${username}`;
      const instagramWebUrl = item.link;

      try {
        const canOpenApp = await Linking.canOpenURL(instagramAppUrl);
        if (canOpenApp) {
          await Linking.openURL(instagramAppUrl);
        } else {
          await Linking.openURL(instagramWebUrl);
        }
      } catch (error) {
        console.error('Error opening Instagram:', error);
        Alert.alert('Error', 'Unable to open Instagram');
      }
    } else if (item.title === 'Phone Number') {
      let phoneNumber = item.link;
      const phoneUrl =
        Platform.OS === 'ios'
          ? `telprompt:${phoneNumber}`
          : `tel:${phoneNumber}`;

      try {
        await Linking.openURL(phoneUrl);
      } catch (error) {
        console.error('Error opening phone dialer:', error);
        Alert.alert('Error', 'Unable to open phone dialer');
      }
    } else {
      try {
        await Linking.openURL(item.link);
      } catch (error) {
        console.error('Error opening link:', error);
        Alert.alert('Error', 'Unable to open this link');
      }
    }
  };

  return (
    <Touchable style={styles.container} onPress={handlePress}>
      <CachedImage source={item.icon} style={[styles.imageStyle]} />
    </Touchable>
  );
};

export default ContactItem;
