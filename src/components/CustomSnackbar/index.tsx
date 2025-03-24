import styles from './style';
import {CustomSnackbarProps} from '../../types';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {useCallback} from 'react';
import {useTheme} from '../../hooks';
import {Text, View} from 'react-native';

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  backgroundColor,
  customSnackbarRef,
  onCustomSnackbarChanges,
  onCloseCustomSnackbar,
  contentContainer,
  text,
}) => {
  const {colors} = useTheme();

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={0}
        disappearsOnIndex={1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={customSnackbarRef}
      onChange={onCustomSnackbarChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      enableDynamicSizing={true}
      onDismiss={onCloseCustomSnackbar}
      overDragResistanceFactor={0}
      handleIndicatorStyle={{
        backgroundColor: colors.text,
        display: 'none',
      }}
      backgroundStyle={{
        backgroundColor: backgroundColor,
        height: 0,
        borderRadius: 0,
      }}>
      <BottomSheetView style={[styles.container, contentContainer]}>
        <Text style={styles.text}>{text}</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomSnackbar;
