import {View} from 'react-native';
import {TrackingStepProps} from '../../types';
import styles from './style';
import {FlexibleStepIndicatorItem} from './components';
import React from 'react';

const FlexibleStepIndicator: React.FC<TrackingStepProps> = ({steps}) => {
  return (
    <>
      {steps.map((step, index) => {
        return (
          <FlexibleStepIndicatorItem
            key={step.id}
            item={step}
            lastIndex={index === steps.length - 1}
          />
        );
      })}
    </>
  );
};

export default FlexibleStepIndicator;
