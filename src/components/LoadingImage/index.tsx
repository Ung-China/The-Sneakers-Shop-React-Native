import {View} from 'react-native';
import {Icons} from '../../constants';
import styles from './style';
import {LoadingImageProps} from '../../types';
import {useTheme} from '../../hooks';

const LoadingImage: React.FC<LoadingImageProps> = ({imageStyle, iconSize}) => {
  return (
    <View style={[styles.container, imageStyle]}>
      <Icons.PLACEHOLDER width={iconSize} />
    </View>
  );
};
export default LoadingImage;
