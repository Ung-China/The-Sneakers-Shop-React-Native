import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {ProfileImageProps} from '../../types';

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageContainer,
  imageStyle,
  loadingImageStyle,
  iconSize,
}) => {
  return (
    <CachedImage
      source={'https://ebook-api-psi.vercel.app/uploads/images/china.JPG'}
      style={imageContainer}
      imageStyle={imageStyle}
      loadingImageComponent={() => (
        <LoadingImage iconSize={iconSize} imageStyle={loadingImageStyle} />
      )}
    />
  );
};

export default ProfileImage;
