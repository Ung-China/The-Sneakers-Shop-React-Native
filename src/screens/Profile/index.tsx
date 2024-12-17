import {FlatList, SafeAreaView, View} from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import {useProfile, useTheme} from '../../hooks';
import ProfileMenuItem from '../../components/ProfileMenuItem';
import {ProfileMenu} from '../../models';
import styles from './style';
import {BottomSheet} from '../../components';
import LoginModal from './components';

const ProfileScreen: React.FC = () => {
  const {colors} = useTheme();
  const {
    menuItems,
    toggleTheme,
    isDarkMode,
    handleNavigateToEditProfile,
    handleMenuPress,
    bottomSheetLogincModalRef,
    handleLoginSheetChanges,
    handleLoginSheetDismiss,
    handleNavigateToCreateAccount,
    handleNavigateToForgotPassword,
  } = useProfile();

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
      />
      <BottomSheet
        bottomSheetModalRef={bottomSheetLogincModalRef}
        onSheetChanges={handleLoginSheetChanges}
        handleLogisticSheetDismiss={handleLoginSheetDismiss}
        content={
          <LoginModal
            handleNavigateToCreateAccount={handleNavigateToCreateAccount}
            handleNavigateToForgotPassword={handleNavigateToForgotPassword}
          />
        }
      />
    </View>
  );
};

export default ProfileScreen;
