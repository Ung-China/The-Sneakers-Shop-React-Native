import {FlatListComponent, Linking, Platform, Text, View} from 'react-native';
import styles from './style';
import React from 'react';
import {useTranslation} from 'react-i18next';
import IconButton from '../../../../components/IconButton';
import {Icons} from '../../../../constants';
import {useTheme} from '../../../../hooks';
import {OpenMapModalProps} from '../../../../types/OpenMapModal';
import {Touchable} from '../../../../components';

const OpenMapModal: React.FC<OpenMapModalProps> = ({
  handleDismissModal,
  latitude,
  longitude,
  name,
}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const openMap = (platform: 'google' | 'apple') => {
    let url = '';

    if (platform === 'google') {
      url = `https://www.google.com/maps?q=${latitude},${longitude}(${name})`;
    } else if (platform === 'apple' && Platform.OS === 'ios') {
      url = `maps://?q=${name}&ll=${latitude},${longitude}`;
    }

    Linking.openURL(url).catch(err => console.error('Error opening map', err));
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={[styles.headerLabel, {color: colors.text}]}>
          {t('openIn')}
        </Text>
        <IconButton
          onPress={handleDismissModal}
          icon={<Icons.CLOSEMODAL color={colors.grey} width={25} height={25} />}
        />
      </View>
      <View style={[styles.separator, {backgroundColor: colors.grey}]} />
      <View style={styles.buttonContainer}>
        {Platform.OS === 'ios' && (
          <Touchable
            style={[styles.mapContainer, {backgroundColor: colors.primary}]}
            onPress={() => openMap('apple')}>
            <Icons.APPLEMAP width={45} height={45} />
            <Text style={[styles.map, {color: colors.text}]}>Apple Maps</Text>
          </Touchable>
        )}
        <Touchable
          style={[styles.mapContainer, {backgroundColor: colors.primary}]}
          onPress={() => openMap('google')}>
          <Icons.GOOGLEMAP width={45} height={45} />
          <Text style={[styles.map, {color: colors.text}]}>Google Maps</Text>
        </Touchable>
      </View>
    </>
  );
};

export default OpenMapModal;
