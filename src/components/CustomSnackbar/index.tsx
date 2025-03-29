import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {CustomSnackbarProps} from '../../types';
import style from './style';

const SNACKBAR_COLORS: Record<string, string> = {
  success: '#4BB543',
  error: '#FF4C4C',
  warning: '#FFA500',
  info: '#2196F3',
};

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  text,
  type = 'success',
  customSnackbarRef,
  contentContainer,
}) => {
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={0.2}
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
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      enableDynamicSizing={true}
      overDragResistanceFactor={0}
      handleIndicatorStyle={{
        display: 'none',
      }}
      backgroundStyle={{
        height: 0,
        borderRadius: 0,
      }}>
      <BottomSheetView
        style={[
          style.container,
          {
            backgroundColor: SNACKBAR_COLORS[type] || SNACKBAR_COLORS.success,
          },
          contentContainer,
        ]}>
        <View>
          <Text style={style.text}>{text}</Text>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomSnackbar;
