import {Alert, Text, View} from 'react-native';
import ProfileImage from '../ProfileImage';
import styles from './style';
import Touchable from '../Touchable';
import {Icons} from '../../constants';
import {useTheme} from '../../hooks';
// import {useThemeContext} from '../../hooks';

const ProfileHeader: React.FC = () => {
  const {colors} = useTheme();

  const handlePress = () => {
    return Alert.alert('Edit Profile');
  };

  return (
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
        onPress={handlePress}
        style={[styles.buttonContainer, {backgroundColor: colors.secondary}]}>
        <Icons.EDIT color={colors.icon} />
      </Touchable>
    </View>
  );
};

export default ProfileHeader;
