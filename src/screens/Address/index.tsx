import React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import {
  AddressLabelItem,
  BottomSheet,
  FlexibleInput,
  Footer,
  ItemSeparatorWidth,
  Section,
  Touchable,
} from '../../components';
import {useTranslation} from 'react-i18next';
import {Icons} from '../../constants';
import {addressLabels} from '../../models/AddressLabel';
import {AddressLabelItemProps} from '../../types';
import useAddress from '../../hooks/useAddress';
import {ProvinceModal} from './components';

const AddressScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const {
    handleProvinceSheetChanges,
    bottomSheetProvinceModalRef,
    toggleAddressLabel,
    activeLabel,
    label,
    toggleProvinceSheet,
    toggleProvince,
    activeProvince,
    setProvince,
    province,
    errorProvince,
    save,
    setPhoneNumber,
    phoneNumber,
    errorPhoneNumber,
    setStreetLine1,
    streetLine1,
    setStreetLine2,
    streetLine2,
    setNoted,
    note,
  } = useAddress();

  const addressLabelItem = ({
    item,
    index,
  }: {
    item: AddressLabelItemProps['item'];
    index: number;
  }) => {
    return (
      <AddressLabelItem
        onPress={() => toggleAddressLabel(index, item.name)}
        item={item}
        isActive={activeLabel === index}
      />
    );
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor: colors.primary}]}>
        <View style={styles.contentContainer}>
          <Section
            title={t('country')}
            titleStyle={[styles.title, {color: colors.text}]}>
            <View style={[styles.separator, {borderColor: colors.grey}]} />
            <View
              style={[
                styles.countryContainer,
                {backgroundColor: colors.secondary},
              ]}>
              <View style={styles.header}>
                <Icons.CAMBODIA width={37} height={37} />
                <Text style={[styles.countryLabel, {color: colors.text}]}>
                  {t('cambodiaCountry')}
                </Text>
              </View>
              <Icons.RadioFill width={20} height={20} color={colors.text} />
            </View>
          </Section>
          <Section
            title={t('personalInformation')}
            titleStyle={[styles.title, {color: colors.text}]}>
            <View style={[styles.separator, {borderColor: colors.grey}]} />
            <View style={styles.inputContainer}>
              <FlatList
                data={addressLabels}
                renderItem={addressLabelItem}
                scrollEnabled={false}
                horizontal
                ItemSeparatorComponent={ItemSeparatorWidth}
                keyExtractor={item => item.id.toString()}
              />
              <FlexibleInput
                label={t('phoneNumber')}
                placeholder={t('enterPhoneNumber')}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                error={errorPhoneNumber}
                editable={true}
                textInputStyle={[
                  styles.textInputStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
            </View>
          </Section>
          <Section
            title={t('address')}
            titleStyle={[styles.title, {color: colors.text}]}>
            <View style={[styles.separator, {borderColor: colors.grey}]} />
            <View style={styles.inputContainer}>
              <FlexibleInput
                label={t('streetLine1')}
                placeholder={t('enterStreet1')}
                editable={true}
                value={streetLine1}
                onChangeText={setStreetLine1}
                textInputStyle={[
                  styles.textInputStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
              <FlexibleInput
                label={t('streetLine2')}
                placeholder={t('enterStreet1')}
                editable={true}
                value={streetLine2}
                onChangeText={setStreetLine2}
                textInputStyle={[
                  styles.textInputStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
              <FlexibleInput
                label={t('province')}
                placeholder={t('selectProvince')}
                onPress={toggleProvinceSheet}
                value={province}
                error={errorProvince}
                contentContainerStyle={[
                  styles.cityContainer,
                  {backgroundColor: colors.secondary},
                ]}
                suffixIcon={
                  <Icons.ARROWDOWN color={colors.text} width={25} height={25} />
                }
              />
              <FlexibleInput
                label={t('note')}
                placeholder={t('noteSomething')}
                editable={true}
                multiline={true}
                value={note}
                onChangeText={setNoted}
                textInputStyle={[
                  styles.textInputStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
            </View>
          </Section>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Footer
          safeAreaStyle={[
            styles.footerContainer,
            {borderColor: colors.grey, backgroundColor: colors.primary},
          ]}>
          <Touchable
            onPress={() => save()}
            style={[
              styles.saveButton,
              {backgroundColor: colors.secondaryReversed},
            ]}>
            <Text style={[styles.save, {color: colors.textReversed}]}>
              {t('save')}
            </Text>
          </Touchable>
        </Footer>
      </KeyboardAvoidingView>
      <BottomSheet
        bottomSheetModalRef={bottomSheetProvinceModalRef}
        onSheetChanges={handleProvinceSheetChanges}
        handleSheetDismiss={() => {}}
        snapPoints={['80%']}
        enableDynamicSizing={false}
        content={
          <ProvinceModal onPress={toggleProvince} isActive={activeProvince} />
        }
      />
    </>
  );
};

export default AddressScreen;
