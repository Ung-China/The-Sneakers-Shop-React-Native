import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {Icons} from '../../constants';
import {RatingTagProps} from '../../types';
import {useTheme} from '../../hooks';

const RatingTag: React.FC<RatingTagProps> = ({
  averageRating,
  averageRatingStyle,
  totalRating,
  totalRatingStyle,
}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Icons.STAR width={20} height={20} />
      <Text
        style={[
          styles.averageRating,
          averageRatingStyle,
          {color: colors.text},
        ]}>
        {averageRating && averageRating}
      </Text>
      <Text
        style={[styles.totalRating, totalRatingStyle, {color: colors.text}]}>
        ({totalRating && totalRating})
      </Text>
    </View>
  );
};

export default RatingTag;
