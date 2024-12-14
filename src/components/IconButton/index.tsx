import React from 'react';
import Touchable from '../Touchable';
import {IconButtonProps} from '../../types';

const IconButton: React.FC<IconButtonProps> = ({onPress, icon, style}) => {
  return (
    <Touchable onPress={onPress} style={style}>
      {icon}
    </Touchable>
  );
};

export default IconButton;
