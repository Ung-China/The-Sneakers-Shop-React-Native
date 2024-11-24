import {SafeAreaView, View} from 'react-native';
import {FooterProps} from '../../types';
import styles from './style';

const Footer: React.FC<FooterProps> = ({
  children,
  contentContainerStyle,
  safeAreaStyle,
}) => {
  return (
    <SafeAreaView style={safeAreaStyle}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Footer;
