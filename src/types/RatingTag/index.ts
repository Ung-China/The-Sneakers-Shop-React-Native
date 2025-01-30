import {TextStyle} from 'react-native';

export interface RatingTagProps {
  averageRating: string;
  totalRating: string;
  averageRatingStyle?: TextStyle;
  totalRatingStyle?: TextStyle;
}
