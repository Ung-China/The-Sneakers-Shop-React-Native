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

    bottomSheetDeliveryModalRef,
    handleDeliverySheetChanges,
    toggleCloseDeliverySheet,
    toggleApplyAddress,
    toggleDeliverySheet,

    setTempAddress,
    setTempActiveAddress,
    tempActiveAddress,
    address,
    errorAddress,

    handleNavigateToScreenAddress,
    handleNavigateToScreenCheckout,

    bottomSheetLogisticModalRef,
    toggleCloseLogisticSheet,
    handleLogisticSheetChanges,
    toggleApplyLogistic,
    toggleLogisticSheet,
    setTempLogistic,
    setTempActiveLogistic,
    tempActiveLogistic,
    logistic,
    errorLogistic,
  } = useDelivery();

  console.log('CHECK_DELIVERY_OPTION', selectedOption);
  console.log('CHECK_LOGISTIC_COMPANY', logistic);
  console.log('CHECK_ADDRESS', address);

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
              onPress={() => selectOption('pickup')}
              isActive={selectedOption === 'pickup'}
            />
            <OptionItem
              title={t('deliveryMan')}
              description={t('deliveryToYourPlace')}
              onPress={() => selectOption('delivery')}
              isActive={selectedOption === 'delivery'}
            />
          </View>

          {selectedOption === 'pickup' && null}
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
                {address ? (
                  <>
                    <Text style={[styles.shippingLabel, {color: colors.grey}]}>
                      {address?.label}
                    </Text>
                    <Text style={[styles.shipping, {color: colors.grey}]}>
                      {address?.streetLine1}
                    </Text>
                    <Text style={[styles.shipping, {color: colors.grey}]}>
                      {address?.province} - {address?.phoneNumber}
                    </Text>
                  </>
                ) : (
                  <Text
                    style={[
                      styles.deliveryError,
                      {color: errorAddress ? 'red' : colors.grey},
                    ]}>
                    {t('pleaseEnterShippingAddress')}
                  </Text>
                )}
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
                {logistic ? (
                  <Text style={[styles.shippingLabel, {color: colors.grey}]}>
                    {logistic}
                  </Text>
                ) : (
                  <Text
                    style={[
                      styles.deliveryError,
                      {color: errorLogistic ? 'red' : colors.grey},
                    ]}>
                    {t('pleaseChoseLogisticCompany')}
                  </Text>
                )}
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
            onPressApply={toggleApplyAddress}
            setActiveAddress={setTempActiveAddress}
            activeAddress={tempActiveAddress}
            setAddress={setTempAddress}
            handleNavigateToScreenAddress={handleNavigateToScreenAddress}
          />
        }
      />
      <BottomSheet
        bottomSheetModalRef={bottomSheetLogisticModalRef}
        onSheetChanges={handleLogisticSheetChanges}
        enableDynamicSizing={true}
        content={
          <LogisticModal
            onPressCancel={toggleCloseLogisticSheet}
            onPressApply={toggleApplyLogistic}
            setActiveLogistic={setTempActiveLogistic}
            activeLogistic={tempActiveLogistic}
            setLogistic={setTempLogistic}
          />
        }
      />
    </>
  );
};

export default DeliveryScreen;
