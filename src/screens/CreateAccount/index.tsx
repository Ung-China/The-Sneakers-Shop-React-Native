import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './style';
import {
  useCreateAccount,
  useSignInWithPhoneNumber,
  useTheme,
} from '../../hooks';
import {useTranslation} from 'react-i18next';
import React from 'react';
import {
  FlexibleInput,
  Footer,
  LoadingModal,
  OTPModal,
  Touchable,
} from '../../components';
import {Icons, KeyboardTypes} from '../../constants';

const CreateAccountScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const {
    // sendOTP,
    // verifyOTP,
    // isVerified,
    // loading,
    // isModalVisible,
    // phoneNumber,
    // setPhoneNumber,
    // errorPhoneNumber,
    // isVerified,
    // closeModal,
    // setOTP,
    // OTP,
    // errorOTP,
    // name,
    // errorName,
    // setName,
    // password,
    // errorPassword,
    // setPassword,
    // confirmPassword,
    // errorConfirmPassword,
    // setConfirmPassword,
    // createAccount,
  } = useSignInWithPhoneNumber();

  const {
    isLoading,
    isModalVisible,

    isVerified,
    sendOTP,

    toggleModal,

    setPhoneNumber,
    phoneNumber,
    errorPhoneNumber,

    setOTP,
    OTP,
    errorOTP,
  } = useCreateAccount();

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.primary}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isVerified ? (
            <View style={styles.inputContainer}>
              <FlexibleInput
                prefixIcon={<Icons.PROFILE color={colors.grey} />}
                onPressRightAction={() => {}}
                placeholder={t('name')}
                editable={true}
                // value={name}
                // onChangeText={setName}
                // error={errorName}
                textInputStyle={[styles.textInputStyle]}
                contentContainerStyle={[
                  styles.contentContainerStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
              <FlexibleInput
                prefixIcon={<Icons.KEY color={colors.grey} />}
                suffixIcon={
                  <Icons.EYEOFF color={colors.grey} width={23} height={23} />
                }
                onPressRightAction={() => {}}
                placeholder={t('password')}
                editable={true}
                // value={password}
                // onChangeText={setPassword}
                // error={errorPassword}
                textInputStyle={[styles.textInputStyle]}
                contentContainerStyle={[
                  styles.contentContainerStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
              <FlexibleInput
                prefixIcon={<Icons.KEY color={colors.grey} />}
                suffixIcon={
                  <Icons.EYEOFF color={colors.grey} width={23} height={23} />
                }
                onPressRightAction={() => {}}
                placeholder={t('confirmPassword')}
                editable={true}
                // value={confirmPassword}
                // onChangeText={setConfirmPassword}
                // error={errorConfirmPassword}
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
                  {t('CREATEYOURACCOUNT')}
                </Text>
                <Text style={[styles.description, {color: colors.text}]}>
                  {t('Itonlytakesafewstepstogetstarted')}
                </Text>
              </View>
              <FlexibleInput
                prefixIcon={<Icons.PHONE color={colors.grey} />}
                placeholder={t('phoneNumber')}
                error={errorPhoneNumber}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                editable={true}
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

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Footer
            safeAreaStyle={[
              styles.footerContainer,
              {backgroundColor: colors.primary},
            ]}>
            {isVerified ? (
              <Touchable
                // onPress={createAccount}
                onPress={() => {}}
                style={[
                  styles.footerButton,
                  {backgroundColor: colors.secondaryReversed},
                ]}>
                <Text
                  style={[styles.footerLabel, {color: colors.textReversed}]}>
                  {t('done')}
                </Text>
              </Touchable>
            ) : (
              <Touchable
                onPress={sendOTP}
                style={[
                  styles.footerButton,
                  {backgroundColor: colors.secondaryReversed},
                ]}>
                <Text
                  style={[styles.footerLabel, {color: colors.textReversed}]}>
                  {t('continue')}
                </Text>
              </Touchable>
            )}
          </Footer>
          <OTPModal
            isVisible={isModalVisible}
            onClose={toggleModal}
            // onPress={() => verifyOTP(phoneNumber, OTP)}
            phoneNumber={phoneNumber}
            setOTP={setOTP}
            errorOTP={errorOTP}
          />
          <LoadingModal visible={isLoading} />
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default CreateAccountScreen;
