import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {useOrder, useTheme} from '../../hooks';
import {Tab, TabView} from '@rneui/themed';
import {useTranslation} from 'react-i18next';
import {OrderHistoryList, OrderList} from './components';
import {Radius} from '../../constants';

const OrderScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {activeTabIndex, setActiveTabIndex} = useOrder();

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Tab
        value={activeTabIndex}
        onChange={setActiveTabIndex}
        indicatorStyle={{
          backgroundColor: colors.text,
          height: 2,
          borderRadius: Radius.DEFAULT,
          width: '50%',
        }}>
        <Tab.Item
          title={t('order')}
          titleStyle={[styles.tabItemStyle, {color: colors.text}]}
        />
        <Tab.Item
          title={t('history')}
          titleStyle={[styles.tabItemStyle, {color: colors.text}]}
        />
      </Tab>
      <TabView
        value={activeTabIndex}
        onChange={setActiveTabIndex}
        animationType="timing"
        animationConfig={{
          duration: 100,
          useNativeDriver: true,
        }}>
        <TabView.Item style={styles.listContainer}>
          <OrderList />
        </TabView.Item>
        <TabView.Item style={styles.listContainer}>
          <OrderHistoryList />
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default OrderScreen;
