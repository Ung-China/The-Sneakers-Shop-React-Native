import {TextStyle} from 'react-native';

export interface RatingTagProps {
  averageRating: number;
  totalRating: number;
  averageRatingStyle?: TextStyle;
  totalRatingStyle?: TextStyle;
}
