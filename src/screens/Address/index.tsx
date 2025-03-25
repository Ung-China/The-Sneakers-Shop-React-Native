import React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  FlatList,
  SafeAreaView,
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
import {CityModal} from './components';

const AddressScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {
    handleProvinceSheetChanges,
    bottomSheetProvinceModalRef,
    toggleAddressLabel,
    activeAddressLabel,
    toggleProvinceSheet,
    toggleProvince,
    activeProvince,
    province,
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
        onPress={() => toggleAddressLabel(index)}
        item={item}
        isActive={activeAddressLabel === index}
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
                textInputStyle={[
                  styles.textInputStyle,
                  {backgroundColor: colors.secondary},
                ]}
              />
              <FlexibleInput
                label={t('streetLine2')}
                placeholder={t('enterStreet1')}
                editable={true}
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
            onPress={() => {}}
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
        handleLogisticSheetDismiss={() => {}}
        snapPoints={['80%']}
        enableDynamicSizing={false}
        content={
          <CityModal onPress={toggleProvince} isActive={activeProvince} />
        }
      />
    </>
  );
};

export default AddressScreen;
