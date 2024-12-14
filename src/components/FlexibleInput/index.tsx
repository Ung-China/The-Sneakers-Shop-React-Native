import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';
import IconButton from '../IconButton';
import {useTheme} from '../../hooks';
import {FlexibleInputProps} from '../../types';
import Touchable from '../Touchable';

const FlexibleInput: React.FC<FlexibleInputProps> = ({
  onPress,
  onChangeText,
  editable = false,
  multiline = false,
  value,
  label,
  error,
  placeholder,
  keyboardType,
  textInputStyle,
  containerStyle,
  contentContainerStyle,
  prefixIcon,
  suffixIcon,
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
              {placeholder}
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
            keyboardType={keyboardType}
            style={[
              styles.textInput,
              textInputStyle,
              {color: colors.text},
              multiline && {height: 100},
            ]}
            editable={editable}
            multiline={multiline}
          />
          {suffixIcon && <IconButton onPress={onPress} icon={suffixIcon} />}
        </View>
      )}

      {error && <Text style={[styles.error]}>{error}</Text>}
    </View>
  );
};
export default FlexibleInput;
