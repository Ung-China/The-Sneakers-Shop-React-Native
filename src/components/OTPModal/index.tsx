import {Modal, Text, View} from 'react-native';
import styles from './style';
import {OTPModalProps} from '../../types';
import {useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import Touchable from '../Touchable';
import {OtpInput} from 'react-native-otp-entry';
import FlatButton from '../FlatButton';

const OTPModal: React.FC<OTPModalProps> = ({
  isVisible,
  onClose,
  animationType = 'fade',
  onPress,
}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType={animationType}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, {backgroundColor: colors.primary}]}>
          <View style={styles.header}>
            <Text style={[styles.title, {color: colors.text}]}>
              {t('verifyPhoneNumber')}
            </Text>
            <Text style={[styles.description, {color: colors.text}]}>
              {t('enter6digitcodesendto')} 069 78 66 77 {t('tocontinue')}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <OtpInput
              numberOfDigits={6}
              autoFocus={true}
              hideStick={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              onTextChange={text => console.log(text)}
              onFilled={text => console.log(`OTP is ${text}`)}
              textInputProps={{
                accessibilityLabel: 'One-Time Password',
              }}
              theme={{
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              }}
            />
            <FlatButton label={t('resend')} labelStyle={styles.resendLabel} />
          </View>

          <View style={[styles.footer, {borderTopColor: colors.grey}]}>
            <Touchable onPress={onClose} style={styles.cancel}>
              <Text style={[styles.buttonLabel, {color: 'red'}]}>
                {t('cancel')}
              </Text>
            </Touchable>
            <View style={styles.separator} />
            <Touchable onPress={onPress} style={styles.continue}>
              <Text style={[styles.buttonLabel, {color: colors.text}]}>
                {t('continue')}
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OTPModal;
