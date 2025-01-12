import {Alert, Text, View} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../hooks';
import IconButton from '../../../../components/IconButton';
import {Icons} from '../../../../constants';
import {FlatButton, FlexibleInput} from '../../../../components';
import FlexibleTouchable from '../../../../components/FlexibleTouchable';
import {LoginModalProps} from '../../../../types';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const LoginModal: React.FC<LoginModalProps> = ({
  handleNavigateToCreateAccount,
  handleNavigateToForgotPassword,
  handleLoginSheetDismiss,
  handleLoginWithGoogle,
}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <>
      <View style={styles.header}>
        <Text style={[styles.headerLabel, {color: colors.text}]}>
          {t('login')}
        </Text>
        <IconButton
          onPress={handleLoginSheetDismiss}
          icon={<Icons.CLOSEMODAL color={colors.grey} width={25} height={25} />}
        />
      </View>
      <View style={[styles.separator, {backgroundColor: colors.grey}]} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <FlexibleInput
            prefixIcon={<Icons.PROFILE color={colors.grey} />}
            placeholder={t('phoneNumber')}
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
              <Icons.EYEOFF color={colors.grey} width={23} height={23} />
            }
            onPressRightAction={() => {}}
            placeholder={t('password')}
            editable={true}
            textInputStyle={[styles.textInputStyle]}
            contentContainerStyle={[
              styles.contentContainerStyle,
              {backgroundColor: colors.secondary},
            ]}
          />
          <FlexibleTouchable
            onPress={() => Alert.alert('User Press Login')}
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
              onPress={handleLoginWithGoogle}
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
      </ScrollView>
    </>
  );
};

export default LoginModal;
