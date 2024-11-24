import {ProfileMenu} from '../../models';
import {Icons} from '../../constants';
import {useTranslation} from 'react-i18next';

const useProfile = () => {
  const {t} = useTranslation();
  const menuItems = [
    new ProfileMenu(9, 'Cart', Icons.CART, t('cart'), Icons.ARROWRIGHT, false),
    new ProfileMenu(
      1,
      'OrderHistory',
      Icons.HISTORY,
      t('orderHistory'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      2,
      'Notification',
      Icons.NOTIFICATION,
      t('notifications'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      3,
      'Favorite',
      Icons.HEART,
      t('favorite'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      4,
      'Appearance',
      Icons.APPEARANCE,
      t('appearance'),
      undefined,
      false,
      true,
    ),
    new ProfileMenu(
      5,
      'Language',
      Icons.TRANSLATE,
      t('language'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      6,
      'AboutUs',
      Icons.ME,
      t('aboutUs'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      7,
      'SignOutModal',
      undefined,
      t('signOut'),
      undefined,
      true,
    ),
    new ProfileMenu(
      8,
      'DeleteAccountModal',
      undefined,
      t('deleteMyAccount'),
      undefined,
      true,
    ),
  ];

  return {menuItems};
};

export default useProfile;
