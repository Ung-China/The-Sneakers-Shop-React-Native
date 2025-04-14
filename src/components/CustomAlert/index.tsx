import React from 'react';
import {Modal, Text, View} from 'react-native';
import styles from './style';
import {CustomAlertProps} from '../../types';
import {useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import Touchable from '../Touchable';

const CustomAlert: React.FC<CustomAlertProps> = ({
  isVisible,
  title,
  description,
  onCloseTitle,
  onPressTitle,
  onClose,
  onPress,
  animationType = 'fade',
  singleButtonMode,
}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  return (
    <Modal visible={isVisible} transparent={true} animationType={animationType}>
      <View style={styles.modalOverlay}>
        <View
          style={[styles.modalContent, {backgroundColor: colors.secondary}]}>
          <View style={styles.header}>
            {title && (
              <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
            )}
            {description && (
              <Text style={[styles.description, {color: colors.text}]}>
                {description}
              </Text>
            )}
          </View>

          <View
            style={[
              styles.footer,
              {
                borderTopColor: colors.grey,
                justifyContent: singleButtonMode ? 'center' : 'space-between',
              },
            ]}>
            {!singleButtonMode && (
              <>
                <Touchable onPress={onClose} style={styles.cancel}>
                  <Text style={[styles.buttonLabel, {color: 'red'}]}>
                    {onCloseTitle || t('cancel')}
                  </Text>
                </Touchable>
                <View style={styles.separator} />
              </>
            )}

            <Touchable
              onPress={onPress}
              style={[
                styles.continue,
                singleButtonMode && styles.singleButton,
              ]}>
              <Text style={[styles.buttonLabel, {color: colors.text}]}>
                {onPressTitle || t('ok')}
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
