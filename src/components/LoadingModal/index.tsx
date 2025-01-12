import {ActivityIndicator, Modal, View} from 'react-native';
import styles from './style';
import {LoadingModalProps} from '../../types';
import {useTheme} from '../../hooks';

const LoadingModal: React.FC<LoadingModalProps> = ({visible}) => {
  const {colors} = useTheme();
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View
          style={[styles.contentContainer, {backgroundColor: colors.primary}]}>
          <ActivityIndicator />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
