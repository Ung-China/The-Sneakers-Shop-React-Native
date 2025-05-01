import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import {useForgotPassword, useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import React, {useEffect} from 'react';
import {
  FlexibleInput,
  Footer,
  LoadingModal,
  OTPModal,
  Touchable,
} from '../../components';
import {Icons, KeyboardTypes} from '../../constants';

const ForgotPasswordScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {
    isLoading,
    isModalVisible,
    isVerified,
    sendOTP,
    verifyOTP,
    toggleModal,
    setPhoneNumber,
    phoneNumber,
    errorPhoneNumber,
    setOTP,
    OTP,
    errorOTP,

    changePassword,

    password,
    setPassword,
    errorPassword,
    confirmPassword,
    setConfirmPassword,
    errorConfirmPassword,

    togglePasswordVisibility,
    passwordVisible,
    toggleConfirmPasswordVisibility,
    confirmPasswordVisible,
  } = useForgotPassword();

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.primary}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isVerified ? (
            <View style={styles.inputContainer}>
              <FlexibleInput
                prefixIcon={<Icons.KEY color={colors.grey} />}
                suffixIcon={
                  passwordVisible ? (
                    <Icons.EYEOFF color={colors.grey} width={23} height={23} />
                  ) : (
                    <Icons.EYE color={colors.grey} width={23} height={23} />
                  )
                }
                secureTextEntry={passwordVisible}
                onPressRightAction={togglePasswordVisibility}
                placeholder={t('newPassword')}
                editable={true}
                autoFocus={true}
                value={password}
                onChangeText={setPassword}
                error={errorPassword}
                textInputStyle={[styles.textInputStyle]}
                contentContainerStyle={[
                  styles.contentContainerStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
              <FlexibleInput
                prefixIcon={<Icons.KEY color={colors.grey} />}
                suffixIcon={
                  confirmPasswordVisible ? (
                    <Icons.EYEOFF color={colors.grey} width={23} height={23} />
                  ) : (
                    <Icons.EYE color={colors.grey} width={23} height={23} />
                  )
                }
                secureTextEntry={confirmPasswordVisible}
                onPressRightAction={toggleConfirmPasswordVisibility}
                placeholder={t('confirmPassword')}
                editable={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                error={errorConfirmPassword}
                textInputStyle={[styles.textInputStyle]}
                contentContainerStyle={[
                  styles.contentContainerStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
            </View>
          ) : (
            <View style={styles.inputContainer}>
              <View style={styles.titleContainer}>
                <Text style={[styles.title, {color: colors.text}]}>
                  {t('FORGOTPASSWORD')}
                </Text>
                <Text style={[styles.description, {color: colors.text}]}>
                  {t('enteryourphonenumbertorecoverpassword')}
                </Text>
              </View>
              <FlexibleInput
                prefixIcon={<Icons.PHONE color={colors.grey} />}
                placeholder={t('phoneNumber')}
                editable={true}
                autoFocus={true}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                error={errorPhoneNumber}
                keyboardType={KeyboardTypes.PHONE_NUMBER}
                textInputStyle={[styles.textInputStyle]}
                contentContainerStyle={[
                  styles.contentContainerStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
            </View>
          )}
        </ScrollView>

        <Footer
          safeAreaStyle={[
            styles.footerContainer,
            {backgroundColor: colors.primary},
          ]}>
          <Touchable
            onPress={isVerified ? changePassword : sendOTP}
            style={[
              styles.footerButton,
              {backgroundColor: colors.secondaryReversed},
            ]}>
            <Text style={[styles.footerLabel, {color: colors.textReversed}]}>
              {isVerified ? t('done') : t('continue')}
            </Text>
          </Touchable>
        </Footer>
        <OTPModal
          isVisible={isModalVisible}
          onClose={toggleModal}
          onPress={verifyOTP}
          phoneNumber={phoneNumber}
          setOTP={setOTP}
          errorOTP={errorOTP}
          sendOTP={sendOTP}
        />
        <LoadingModal visible={isLoading} />
      </View>
    </>
  );
};
export default ForgotPasswordScreen;
