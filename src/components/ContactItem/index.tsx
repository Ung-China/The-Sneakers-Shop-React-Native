import styles from './style';
import {ContactItemProps} from '../../types';
import {CachedImage} from '@georstat/react-native-image-cache';
import Touchable from '../Touchable';

const ContactItem: React.FC<ContactItemProps> = ({item}) => {
  return (
    <Touchable style={styles.container}>
      <CachedImage source={item.icon} style={[styles.imageStyle]} />
    </Touchable>
  );
};

export default ContactItem;
