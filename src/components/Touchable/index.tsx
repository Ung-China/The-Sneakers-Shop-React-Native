import React from 'react';
import {TouchableOpacity, Platform, Pressable} from 'react-native';
import {TouchableProps} from '../../types';

const Touchable: React.FC<TouchableProps> = ({
  children,
  style,
  disabled = false,
  onPress,
}) => {
  if (Platform.OS === 'android') {
    return (
      <Pressable
        style={({pressed}) => [style, {opacity: pressed ? 0.5 : 1}]}
        disabled={disabled}
        onPress={onPress}>
        {children}
      </Pressable>
    );
  }

  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
