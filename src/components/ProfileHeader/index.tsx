import {Alert, Text, View} from 'react-native';
import ProfileImage from '../ProfileImage';
import styles from './style';
import Touchable from '../Touchable';
import {Icons} from '../../constants';
import {useTheme, useUser} from '../../hooks';
import {ProfileHeaderProps} from '../../types';
import {useTranslation} from 'react-i18next';

const ProfileHeader: React.FC<ProfileHeaderProps> = ({onPress}) => {
  const {colors} = useTheme();
  const {user, isLoggedIn} = useUser();
  const {t} = useTranslation();

  return (
    <Touchable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <ProfileImage
            imageContainer={styles.imageContainer}
            imageStyle={styles.imageStyle}
            loadingImageStyle={styles.loadingImageStyle}
            iconSize={70}
            image={user?.image}
          />
          <View style={styles.nameContainer}>
            <Text style={[styles.nameText, {color: colors.text}]}>
              {t('greeting')},{' '}
              {isLoggedIn && user?.name ? user.name : t('welcome_guest')}!
            </Text>
            <Text style={[styles.greetingText, {color: colors.text}]}>
              {isLoggedIn ? t('welcome_back') : t('welcome_guest')}
            </Text>
          </View>
        </View>
        <Touchable
          onPress={onPress}
          style={[styles.buttonContainer, {backgroundColor: colors.secondary}]}>
          <Icons.EDIT color={colors.icon} />
        </Touchable>
      </View>
    </Touchable>
  );
};

export default ProfileHeader;
