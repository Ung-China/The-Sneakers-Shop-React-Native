import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text, View} from 'react-native';
import {useDelivery, useTheme} from '../../hooks';
import styles from './style';
import {BottomSheet, Footer, OptionItem} from '../../components';
import FlexibleTouchable from '../../components/FlexibleTouchable';
import IconButton from '../../components/IconButton';
import {Icons} from '../../constants';
import {DeliveryModal, LogisticModal} from './components';

const DeliveryScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {
    selectedOption,
    selectOption,

    bottomSheetLogisticModalRef,
    handleLogisticSheetChanges,
    handleLogisticSheetDismiss,
    toggleCloseLogisticSheet,
    toggleApplyLogistic,
    activeLogistic,
    toggleLogistic,
    toggleLogisticSheet,
    selectedLogistic,

    bottomSheetDeliveryModalRef,
    handleDeliverySheetChanges,
    toggleCloseDeliverySheet,

    activeAddress,
    toggleAddress,
    toggleDeliverySheet,

    handleNavigateToScreenAddress,
    handleNavigateToScreenCheckout,
  } = useDelivery();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor: colors.primary}]}>
        <View style={styles.deliveryContainer}>
          <View style={styles.labelContainer}>
            <Text style={[styles.mainLabel, {color: colors.text}]}>
              {t('chooseDeliveryOption')}
            </Text>
            <Text style={[styles.subLabel, {color: colors.grey}]}>
              {t('selectOneBelowToContinue')}
            </Text>
          </View>
          <View style={styles.optionContainer}>
            <OptionItem
              title={t('pickUp')}
              description={t('takeYourProductByYourself')}
              onPress={() => selectOption('pickUp')}
              isActive={selectedOption === 'pickUp'}
            />
            <OptionItem
              title={t('deliveryMan')}
              description={t('deliveryToYourPlace')}
              onPress={() => selectOption('delivery')}
              isActive={selectedOption === 'delivery'}
            />
          </View>

          {selectedOption === 'pickUp' && null}
          {selectedOption === 'delivery' && (
            <View
              style={[
                styles.shippingContainer,
                {backgroundColor: colors.secondary},
              ]}>
              <View style={styles.shippngHeader}>
                <Text style={[styles.label, {color: colors.text}]}>
                  {t('shippingAddress')}
                </Text>
                <IconButton
                  onPress={toggleDeliverySheet}
                  icon={
                    <Icons.PEN width={20} height={20} color={colors.text} />
                  }
                />
              </View>
              <View style={styles.body}>
                <Text style={[styles.shippingLabel, {color: colors.text}]}>
                  Home
                </Text>
                <Text style={[styles.shipping, {color: colors.text}]}>
                  Siem Reap
                </Text>
                <Text style={[styles.shipping, {color: colors.text}]}>
                  Siem Reap
                </Text>
              </View>
              <View
                style={[styles.separator, {backgroundColor: colors.grey}]}
              />
              <View style={styles.shippngHeader}>
                <Text style={[styles.label, {color: colors.text}]}>
                  {t('logistic')}
                </Text>
                <IconButton
                  onPress={toggleLogisticSheet}
                  icon={
                    <Icons.PEN width={20} height={20} color={colors.text} />
                  }
                />
              </View>
              <View style={styles.body}>
                <Text style={[styles.shippingLabel, {color: colors.text}]}>
                  {selectedLogistic.name}
                </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      <Footer
        safeAreaStyle={[
          styles.safeAreaStyle,
          {backgroundColor: colors.primary},
        ]}>
        <FlexibleTouchable
          label={t('proceedPay')}
          labelStyle={
            (styles.labelStyle,
            {color: colors.textReversed, textAlign: 'center'})
          }
          containerStyle={{backgroundColor: colors.primaryReversed}}
          onPress={handleNavigateToScreenCheckout}
        />
      </Footer>

      <BottomSheet
        bottomSheetModalRef={bottomSheetDeliveryModalRef}
        onSheetChanges={handleDeliverySheetChanges}
        handleSheetDismiss={() => {}}
        enableDynamicSizing={true}
        content={
          <DeliveryModal
            onPressCancel={toggleCloseDeliverySheet}
            onPressApply={toggleApplyLogistic}
            activeAddress={activeAddress}
            toggleAddress={toggleAddress}
            handleNavigateToScreenAddress={handleNavigateToScreenAddress}
          />
        }
      />
      <BottomSheet
        bottomSheetModalRef={bottomSheetLogisticModalRef}
        onSheetChanges={handleLogisticSheetChanges}
        handleSheetDismiss={handleLogisticSheetDismiss}
        enableDynamicSizing={true}
        content={
          <LogisticModal
            onPressCancel={toggleCloseLogisticSheet}
            onPressApply={toggleApplyLogistic}
            activeLogistic={activeLogistic}
            toggleLogistic={toggleLogistic}
          />
        }
      />
    </>
  );
};

export default DeliveryScreen;
