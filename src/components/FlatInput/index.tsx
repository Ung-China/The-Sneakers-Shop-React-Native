import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';
import IconButton from '../IconButton';
import {useTheme} from '../../hooks';
import {FlatInputProps} from '../../types';

const FlatInput: React.FC<FlatInputProps> = ({
  onActionButtonPress,
  value,
  placeholder,
  onChangeText,
  keyboardType,
  textInputStyle,
  containerStyle,
  prefixIcon,
  suffixIcon,
  editable = false,
}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: colors.secondary},
      ]}>
      {prefixIcon && prefixIcon}
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={[styles.textInput, textInputStyle, {color: colors.text}]}
        editable={editable}
      />
      {suffixIcon && (
        <IconButton onPress={onActionButtonPress} icon={suffixIcon} />
      )}
    </View>
  );
};
export default FlatInput;
