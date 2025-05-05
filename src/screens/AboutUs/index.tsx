import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useConfig, useTheme} from '../../hooks';
import {ContactItem, Footer} from '../../components';
import {ContactItemProps} from '../../types';

const AboutUsScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {configs} = useConfig();

  const contactItem = ({item}: {item: ContactItemProps['item']}) => {
    return <ContactItem item={item} />;
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Text style={[styles.name, {color: colors.text}]}>The Sneakers Shop</Text>
      <Text style={[styles.label, {color: colors.text}]}>{t('vision')}</Text>
      <Text style={[styles.visionDescription, {color: colors.text}]}>
        {t('visions')}
      </Text>
      <Text style={[styles.label, {color: colors.text}]}>{t('mission')}</Text>
      <Text style={[styles.visionDescription, {color: colors.text}]}>
        {t('missions')}
      </Text>
      <Text style={[styles.copyRight, {color: colors.text}]}>
        © 2024 The Sneaker. All rights reserved.
      </Text>

      <View style={[styles.footerContainer]}>
        <FlatList
          data={configs?.contacts}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={contactItem}
          contentContainerStyle={styles.contactContainerStyle}
          style={{alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};

export default AboutUsScreen;
