import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import {FlexibleStepItem} from '../../../../types';
import styles from './style';
import DotSeperator from '../../../DotSeperator';
import {useTheme} from '../../../../hooks';

const FlexibleStepIndicatorItem: React.FC<FlexibleStepItem> = ({
  item,
  lastIndex,
}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.dateTimeContainer}>
          <Text style={[styles.date, {color: colors.text}]}>
            {item.date ? moment(item.date).format('MMM DD') : '--'}
          </Text>
          <Text style={[styles.date, styles.time]}>
            {item.date ? moment(item.date).format('LT') : '--'}
          </Text>
        </View>

        <View style={styles.iconContentContainer}>
          <View style={styles.iconContainer}>
            <item.icon width={45} height={45} />
          </View>

          <View style={[styles.titleDescriptionContainer]}>
            <Text style={[styles.title, {color: colors.text}]}>
              {item.title}
            </Text>
            <Text style={[styles.description]} numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.seperatorContainer]}>
        {!lastIndex && (
          <DotSeperator
            length={5}
            isActive={true}
            activeColor={colors.text}
            inactiveColor={colors.grey}
          />
        )}
      </View>
    </View>
  );
};

export default FlexibleStepIndicatorItem;
