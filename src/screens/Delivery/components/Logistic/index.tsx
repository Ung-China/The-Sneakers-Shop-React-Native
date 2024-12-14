import {FlatList, Text, View} from 'react-native';
import styles from './style';
import {useTheme} from '../../../../hooks';
import {useTranslation} from 'react-i18next';
import {
  Footer,
  ItemSeparatorHeight,
  LogisticItem,
  Touchable,
} from '../../../../components';
import {logistics} from '../../../../models/Logistic';
import {LogisticModalProps, LogisticProps} from '../../../../types';
import {Spacing} from '../../../../constants';

const LogisticModal: React.FC<LogisticModalProps> = ({
  onPressApply,
  onPressCancel,
  activeLogistic,
  toggleLogistic,
}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const logisticItem = ({
    item,
    index,
  }: {
    item: LogisticProps['item'];
    index: number;
  }) => {
    return (
      <LogisticItem
        onPress={() => toggleLogistic(item.id)}
        item={item}
        isActive={activeLogistic === item.id}
        containerStyle={{marginLeft: index % 2 === 0 ? 0 : Spacing.DEFAULT}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerLabel, {color: colors.text}]}>
          {t('logistic')}
        </Text>
        <View style={[styles.separator, {backgroundColor: colors.grey}]} />
      </View>
      <View style={styles.body}>
        <FlatList
          numColumns={2}
          data={logistics}
          renderItem={logisticItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorHeight}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <Footer
        safeAreaStyle={[styles.safeAreaStyle, {borderColor: colors.grey}]}
        contentContainerStyle={[styles.footerContainer]}>
        <Touchable
          onPress={onPressCancel}
          style={[styles.buttonContainer, {backgroundColor: 'red'}]}>
          <Text style={[styles.buttonLabel, {color: 'white'}]}>
            {t('cancel')}
          </Text>
        </Touchable>
        <Touchable
          onPress={onPressApply}
          style={[
            styles.buttonContainer,
            {backgroundColor: colors.primaryReversed},
          ]}>
          <Text style={[styles.buttonLabel, {color: colors.textReversed}]}>
            {t('apply')}
          </Text>
        </Touchable>
      </Footer>
    </View>
  );
};

export default LogisticModal;
