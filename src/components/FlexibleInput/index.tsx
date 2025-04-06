import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';
import IconButton from '../IconButton';
import {useTheme} from '../../hooks';
import {FlexibleInputProps} from '../../types';
import Touchable from '../Touchable';
import {KeyboardTypes} from '../../constants';

const FlexibleInput: React.FC<FlexibleInputProps> = ({
  onPress,
  onPressRightAction,
  onChangeText,
  editable = false,
  multiline = false,
  value,
  label,
  error,
  placeholder,
  keyboardType = KeyboardTypes.DEFAULT,
  textInputStyle,
  containerStyle,
  contentContainerStyle,
  prefixIcon,
  suffixIcon,
  autoFocus = false,
  secureTextEntry,
}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, {color: colors.text}]}>{label}</Text>
      )}

      {onPress ? (
        <View style={contentContainerStyle}>
          {prefixIcon && prefixIcon}

          <Touchable onPress={onPress} style={styles.textInput}>
            <Text style={[styles.placeHolder, {color: colors.grey}]}>
              {value ? value : placeholder}
            </Text>
          </Touchable>

          {suffixIcon && <IconButton onPress={onPress} icon={suffixIcon} />}
        </View>
      ) : (
        <View style={contentContainerStyle}>
          {prefixIcon && prefixIcon}

          <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.grey}
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            style={[
              styles.textInput,
              textInputStyle,
              {color: colors.text},
              multiline && {height: 100, textAlignVertical: 'top'},
            ]}
            editable={editable}
            multiline={multiline}
          />

          {suffixIcon && (
            <IconButton onPress={onPressRightAction} icon={suffixIcon} />
          )}
        </View>
      )}

      {error && <Text style={[styles.error]}>{error}</Text>}
    </View>
  );
};
export default FlexibleInput;
