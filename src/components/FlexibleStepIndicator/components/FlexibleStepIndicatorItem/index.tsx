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
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  item.title === 'Cancelled' || item.title === 'បានលុបចោល'
                    ? 'red'
                    : colors.primaryReversed,
              },
            ]}>
            <item.icon
              width={30}
              height={30}
              color={
                item.title === 'Cancelled' || item.title === 'បានលុបចោល'
                  ? colors.white
                  : colors.textReversed
              }
            />
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
            length={6}
            isActive={true}
            activeColor={colors.text}
            inactiveColor={colors.grey}
          />
        )}
        {lastIndex &&
          item.title !== 'Cancelled' &&
          item.title !== 'បានលុបចោល' &&
          item.title !== 'Completed' &&
          item.title !== 'បានទទួលទំនិញ' && (
            <DotSeperator
              length={6}
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
