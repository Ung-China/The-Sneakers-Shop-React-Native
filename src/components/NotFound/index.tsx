import {Text, View} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import {NotFoundProps} from '../../types';
import {Icons} from '../../constants';
import {useTranslation} from 'react-i18next';
const NotFound: React.FC<NotFoundProps> = ({isVisible, description}) => {
  const {colors, theme} = useTheme();
  const {t} = useTranslation();

  if (!isVisible) return null;
  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      {/* <Icons.EMPTYBOX
        width={150}
        height={150}
        color={theme === 'light' ? '#F4F4F4' : '#262626'}
      /> */}
      <Text style={[styles.notFound, {color: colors.text, opacity: 0.4}]}>
        {description}
      </Text>
    </View>
  );
};

export default NotFound;
