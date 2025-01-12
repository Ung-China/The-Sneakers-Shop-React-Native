import {Modal, Text, View} from 'react-native';
import styles from './style';
import {OTPModalProps} from '../../types';
import {useLoginWithPhoneNumber, useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import Touchable from '../Touchable';
import {OtpInput} from 'react-native-otp-entry';
import FlatButton from '../FlatButton';
import {Validator} from '../../helpers';

const OTPModal: React.FC<OTPModalProps> = ({
  isVisible,
  onClose,
  animationType = 'fade',
  onPress,
  phoneNumber,
  setOTP,
  errorOTP,
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
              {t('enter6digitcodesendto')} 0
              {Validator.normalizedNumber(phoneNumber)} {t('tocontinue')}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <OtpInput
              numberOfDigits={6}
              autoFocus={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              onTextChange={text => {
                console.log('INPUT_OTP', text);
                setOTP(text);
              }}
              textInputProps={{
                accessibilityLabel: 'One-Time Password',
              }}
              theme={{
                pinCodeContainerStyle: {
                  ...styles.pinCodeContainer,
                  backgroundColor: colors.secondary,
                },
                pinCodeTextStyle: {...styles.pinCodeText, color: colors.text},
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                focusStickStyle: {
                  ...styles.focusStick,
                  backgroundColor: colors.text,
                },
              }}
            />

            {errorOTP && <Text style={styles.errorOTP}>{errorOTP}</Text>}
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
