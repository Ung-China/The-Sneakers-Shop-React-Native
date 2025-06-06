import {useTranslation} from 'react-i18next';
import {ScrollView, Text, View} from 'react-native';
import {useEditProfile, useTheme, useUser} from '../../hooks';
import styles from './style';
import {
  FlexibleInput,
  Footer,
  LoadingModal,
  ProfileImage,
  Touchable,
} from '../../components';
import IconButton from '../../components/IconButton';
import {Icons} from '../../constants';

const EditProfileScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {user} = useUser();

  const {
    isLoading,
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
    openImagePicker,
    profileImage,
  } = useEditProfile();

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
              image={profileImage?.path ? profileImage.path : user?.image}
            />
          </Touchable>
          <IconButton
            onPress={openImagePicker}
            icon={<Icons.UPLOADIMAGE color="white" width={40} height={40} />}
            style={styles.editIconContaner}
          />
        </View>
        <View style={styles.inputContainer}>
          {user?.isGoogleLogin ? (
            <>
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
                label={t('email')}
                placeholder={email}
                editable={false}
                // value={email}
                onChangeText={setEmail}
                error={errorEmail}
                textInputStyle={[
                  styles.textInputStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
            </>
          ) : (
            <>
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
                placeholder={phoneNumber}
                editable={false}
                // value={phoneNumber}
                onChangeText={setPhoneNumber}
                error={errorPhoneNumber}
                textInputStyle={[
                  styles.textInputStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
              {/* <FlexibleInput
                label={t('email')}
                placeholder="ingchina2004@gmail.com"
                editable={false}
                value={email}
                onChangeText={setEmail}
                error={errorEmail}
                textInputStyle={[
                  styles.textInputStyle,
                  {backgroundColor: colors.secondary},
                ]}
              /> */}
              <FlexibleInput
                label={t('oldPassword')}
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
            </>
          )}
        </View>
      </ScrollView>

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
      <LoadingModal visible={isLoading} />
    </View>
  );
};

export default EditProfileScreen;
