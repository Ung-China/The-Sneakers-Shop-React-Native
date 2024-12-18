import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './style';
import {useCreateAccount, useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import React from 'react';
import {FlexibleInput, Footer, OTPModal, Touchable} from '../../components';
import {Icons, KeyboardTypes} from '../../constants';

const ForgotPasswordScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {isModalVisible, isVerified, closeModal, openModal, verifyOTP} =
    useCreateAccount();
  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.primary}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isVerified ? (
            <View style={styles.inputContainer}>
              <FlexibleInput
                prefixIcon={<Icons.KEY color={colors.grey} />}
                suffixIcon={
                  <Icons.EYEOFF color={colors.grey} width={23} height={23} />
                }
                onPressRightAction={() => {}}
                placeholder={t('newPassword')}
                editable={true}
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
            <Touchable
              onPress={isVerified ? openModal : openModal}
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
            onClose={closeModal}
            onPress={verifyOTP}
          />
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default ForgotPasswordScreen;
