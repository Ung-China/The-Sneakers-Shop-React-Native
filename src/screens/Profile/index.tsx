import {FlatList, View} from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import {useProfile, useSinInWIthGmail, useTheme, useUser} from '../../hooks';
import ProfileMenuItem from '../../components/ProfileMenuItem';
import {ProfileMenu} from '../../models';
import styles from './style';
import {BottomSheet, LoadingModal} from '../../components';
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
  const {user} = useUser();

  console.log('CHECK USER', user);

  const {loading, signInWithGoogle} = useSinInWIthGmail();

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

      <BottomSheet
        bottomSheetModalRef={bottomSheetLogincModalRef}
        onSheetChanges={handleLoginSheetChanges}
        handleSheetDismiss={handleLoginSheetDismiss}
        snapPoints={['90%']}
        enableDynamicSizing={false}
        contentContainer={{flex: 1}}
        content={
          <LoginModal
            handleLoginWithGoogle={signInWithGoogle}
            handleNavigateToCreateAccount={handleNavigateToCreateAccount}
            handleNavigateToForgotPassword={handleNavigateToForgotPassword}
            handleLoginSheetDismiss={handleLoginSheetDismiss}
          />
        }
      />
      <LoadingModal visible={loading} />
    </View>
  );
};

export default ProfileScreen;
