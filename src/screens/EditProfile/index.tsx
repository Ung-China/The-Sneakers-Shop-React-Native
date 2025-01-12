import {useTranslation} from 'react-i18next';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useEditProfile, useTheme} from '../../hooks';
import styles from './style';
import {FlexibleInput, Footer, ProfileImage, Touchable} from '../../components';
import IconButton from '../../components/IconButton';
import {Icons} from '../../constants';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfileScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {
    fullName,
    phoneNumber,
    email,
    oldPassword,
    newPassword,
    errorFullName,
    errorPhoneNumber,
    errorEmail,
    errorOldPassword,
    errorNewPassword,
    setFullName,
    setPhoneNumber,
    setEmail,
    setOldPassword,
    setNewPassword,
    updateProfile,
  } = useEditProfile();

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
      });
      console.log('CHECK IMAGE', image.path);
    } catch (error) {
      console.log('[DEBUG] IMAGE_INPUT', error);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.editProfileContainer}>
          <Touchable onPress={openImagePicker}>
            <ProfileImage
              imageContainer={styles.imageContainer}
              imageStyle={styles.imageStyle}
              loadingImageStyle={styles.loadingImageStyle}
              iconSize={70}
            />
          </Touchable>
          <IconButton
            onPress={openImagePicker}
            icon={<Icons.UPLOADIMAGE color="white" width={40} height={40} />}
            style={styles.editIconContaner}
          />
        </View>

        <View style={styles.inputContainer}>
          <FlexibleInput
            label={t('fullName')}
            placeholder="Ing China"
            editable={true}
            value={fullName}
            onChangeText={setFullName}
            error={errorFullName}
            textInputStyle={[
              styles.textInputStyle,
              {backgroundColor: colors.secondary},
            ]}
          />
          <FlexibleInput
            label={t('phoneNumber')}
            placeholder="069 78 66 77"
            editable={true}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            error={errorPhoneNumber}
            textInputStyle={[
              styles.textInputStyle,
              {backgroundColor: colors.secondary},
            ]}
          />
          <FlexibleInput
            label={t('email')}
            placeholder="ingchina2004@gmail.com"
            editable={true}
            value={email}
            onChangeText={setEmail}
            error={errorEmail}
            textInputStyle={[
              styles.textInputStyle,
              {backgroundColor: colors.secondary},
            ]}
          />
          <FlexibleInput
            label={t('oldPassword')}
            // placeholder="ingchina2004@gmail.com"
            editable={true}
            value={oldPassword}
            onChangeText={setOldPassword}
            error={errorOldPassword}
            textInputStyle={[
              styles.textInputStyle,
              {backgroundColor: colors.secondary},
            ]}
          />
          <FlexibleInput
            label={t('newPassword')}
            // placeholder="ingchina2004@gmail.com"
            editable={true}
            value={newPassword}
            onChangeText={setNewPassword}
            contentContainerStyle={[
              styles.contentContainerStyle,
              {backgroundColor: colors.secondary},
            ]}
            error={errorNewPassword}
            textInputStyle={[
              styles.textInputStyle,
              {backgroundColor: colors.secondary},
            ]}
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 15 : 0}>
        <Footer
          safeAreaStyle={[
            styles.footerContainer,
            {backgroundColor: colors.primary},
          ]}>
          <Touchable
            onPress={updateProfile}
            style={[
              styles.saveButton,
              {backgroundColor: colors.secondaryReversed},
            ]}>
            <Text style={[styles.save, {color: colors.textReversed}]}>
              {t('save')}
            </Text>
          </Touchable>
        </Footer>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditProfileScreen;
