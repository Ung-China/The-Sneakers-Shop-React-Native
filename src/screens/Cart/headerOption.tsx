import {useTranslation} from 'react-i18next';
import {HeaderTitleComponent} from '../../components';
import styles from './style';
import {useTheme} from '../../hooks';

const {t} = useTranslation();
const {colors} = useTheme();
const cartHeaderOption = () => ({
  headerTitle: () => (
    <HeaderTitleComponent
      title={t('cart')}
      titleStyle={[styles.headerTitleStyle, {color: colors.text}]}
    />
  ),
});

export default cartHeaderOption;
