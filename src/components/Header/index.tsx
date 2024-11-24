import {SafeAreaView, View} from 'react-native';
import {HeaderProps} from './headerProp';
import styles from './style';

const HeaderComponent: React.FC<HeaderProps> = ({
  children,
  containerStyle,
  contentContainerStyle,
}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {children && children}
      </View>
    </SafeAreaView>
  );
};

export default HeaderComponent;
