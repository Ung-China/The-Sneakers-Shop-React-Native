import {FlatList, View} from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import {useProfile, useTheme, useUser} from '../../hooks';
import ProfileMenuItem from '../../components/ProfileMenuItem';
import {ProfileMenu} from '../../models';
import styles from './style';
import {CustomAlert, LoadingModal} from '../../components';
import {useTranslation} from 'react-i18next';

const ProfileScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {
    menuItems,
    toggleTheme,
    isDarkMode,
    handleNavigateToEditProfile,
    handleMenuPress,
    logoutVisible,
    setLogoutVisible,
    deleteAccountVisible,
    setDeleteAccountVisible,
  } = useProfile();

  const {isLoading, logout, deleteAccount} = useUser();

  const renderHeader = () => (
    <ProfileHeader onPress={handleNavigateToEditProfile} />
  );

  const renderProfileItem = ({item}: {item: ProfileMenu}) => (
    <ProfileMenuItem
      item={item}
      onPress={handleMenuPress}
      toggleTheme={toggleTheme}
      isDarkMode={isDarkMode}
    />
  );

  const itemSeparator = () => <View style={{height: 10}} />;

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={menuItems}
        renderItem={renderProfileItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.containerStyle}
        ItemSeparatorComponent={itemSeparator}
        showsVerticalScrollIndicator={false}
      />

      <CustomAlert
        isVisible={logoutVisible}
        title={t('logout')}
        description={t('logoutDescription')}
        onClose={() => setLogoutVisible(false)}
        onPress={async () => {
          await logout();
          setLogoutVisible(false);
        }}
      />

      <CustomAlert
        isVisible={deleteAccountVisible}
        title={t('delete')}
        description={t('deleteDescription')}
        onClose={() => setDeleteAccountVisible(false)}
        onPress={async () => {
          await deleteAccount();
          setDeleteAccountVisible(false);
        }}
      />

      <LoadingModal visible={isLoading} />
    </View>
  );
};

export default ProfileScreen;
