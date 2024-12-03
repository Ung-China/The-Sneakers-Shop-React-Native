import React, {useMemo} from 'react';
import {View} from 'react-native';
import styles from './style';
import {DotSeperatorProps} from '../../types';

const DotSeperator: React.FC<DotSeperatorProps> = ({
  length,
  activeColor,
  inactiveColor,
  isActive,
}) => {
  const renderDashed = useMemo(() => {
    return Array(length * 2)
      .fill('')
      .map((_, index) => (
        <View
          key={index}
          style={{
            height: index % 2 === 0 ? 3 : 6,
            width: 1.5,
            backgroundColor:
              index % 2 === 0
                ? 'transparent'
                : isActive
                ? activeColor
                : inactiveColor,
          }}
        />
      ));
  }, [isActive, length, activeColor, inactiveColor]);

  return <View style={[styles.container]}>{renderDashed}</View>;
};

export default DotSeperator;
