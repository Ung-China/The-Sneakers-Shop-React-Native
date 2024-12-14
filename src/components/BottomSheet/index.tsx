import {BottomSheetProps} from '../../types';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import styles from './style';
import React, {useCallback} from 'react';
import {useTheme} from '../../hooks';
const BottomSheet: React.FC<BottomSheetProps> = ({
  content,
  onSheetChanges,
  bottomSheetModalRef,
  handleLogisticSheetDismiss,
  snapPoints,
  enableDynamicSizing = true,
}) => {
  const {colors} = useTheme();
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      onChange={onSheetChanges}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      enableDynamicSizing={enableDynamicSizing}
      enablePanDownToClose={true}
      onDismiss={handleLogisticSheetDismiss}
      handleIndicatorStyle={{backgroundColor: colors.text}}
      backgroundStyle={{backgroundColor: colors.primary}}>
      <BottomSheetView
        style={[styles.contentContainer, {backgroundColor: colors.primary}]}>
        {content}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheet;
