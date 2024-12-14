import {Alert, Text, View} from 'react-native';
import ProfileImage from '../ProfileImage';
import styles from './style';
import Touchable from '../Touchable';
import {Icons} from '../../constants';
import {useTheme} from '../../hooks';
import {ProfileHeaderProps} from '../../types';

const ProfileHeader: React.FC<ProfileHeaderProps> = ({onPress}) => {
  const {colors} = useTheme();

  return (
    <Touchable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <ProfileImage
            imageContainer={styles.imageContainer}
            imageStyle={styles.imageStyle}
            loadingImageStyle={styles.loadingImageStyle}
            iconSize={70}
          />
          <View style={styles.nameContainer}>
            <Text style={[styles.nameText, {color: colors.text}]}>
              Hello, China!
            </Text>
            <Text style={[styles.greetingText, {color: colors.text}]}>
              Welcome back again
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
