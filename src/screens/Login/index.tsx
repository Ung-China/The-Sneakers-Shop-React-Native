import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useLogin, useProfile, useTheme} from '../../hooks';
import IconButton from '../../components/IconButton';
import {Icons} from '../../constants';
import {FlatButton, FlexibleInput, LoadingModal} from '../../components';
import FlexibleTouchable from '../../components/FlexibleTouchable';
import styles from './style';
const LoginScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const {handleNavigateToCreateAccount, handleNavigateToForgotPassword} =
    useProfile();

  const {
    isLoading,
    phoneNumber,
    setPhoneNumber,
    errorPhoneNumber,
    password,
    setPassword,
    errorPassword,
    passwordVisible,
    togglePasswordVisibility,
    login,
    loginWithGoogle,
  } = useLogin();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor: colors.primary}]}>
        <View style={styles.inputContainer}>
          <FlexibleInput
            prefixIcon={<Icons.PROFILE color={colors.grey} />}
            placeholder={t('phoneNumber')}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            error={errorPhoneNumber}
            editable={true}
            autoFocus={true}
            textInputStyle={[styles.textInputStyle]}
            contentContainerStyle={[
              styles.contentContainerStyle,
              {backgroundColor: colors.secondary},
            ]}
          />
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
            placeholder={t('password')}
            value={password}
            onChangeText={setPassword}
            error={errorPassword}
            editable={true}
            textInputStyle={[styles.textInputStyle]}
            contentContainerStyle={[
              styles.contentContainerStyle,
              {backgroundColor: colors.secondary},
            ]}
          />
          <FlexibleTouchable
            onPress={login}
            label={t('login')}
            labelStyle={[styles.buttonStyle, {color: colors.textReversed}]}
            containerStyle={{backgroundColor: colors.secondaryReversed}}
          />
          <FlatButton
            label={t('forgotPassword')}
            onPress={handleNavigateToForgotPassword}
            labelStyle={[styles.forgotPasswordLabel, {color: colors.text}]}
            containerStyle={styles.forgotPasswordContainer}
          />
          <View style={styles.orContainer}>
            <View style={[styles.line, {backgroundColor: colors.grey}]} />
            <Text style={[styles.or, {color: colors.grey}]}>{t('or')}</Text>
            <View style={[styles.line, {backgroundColor: colors.grey}]} />
          </View>
          <View style={styles.socialContainer}>
            <IconButton
              onPress={loginWithGoogle}
              icon={<Icons.GOOGLE />}
              style={styles.socialButton}
            />
          </View>
          <FlatButton
            onPress={handleNavigateToCreateAccount}
            label={t('createAccount')}
            labelStyle={[styles.forgotPasswordLabel, {color: colors.text}]}
            containerStyle={styles.forgotPasswordContainer}
          />
        </View>
        <LoadingModal visible={isLoading} />
      </ScrollView>
    </>
  );
};

export default LoginScreen;
