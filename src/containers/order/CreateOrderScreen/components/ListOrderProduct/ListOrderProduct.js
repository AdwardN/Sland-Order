import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import moment from 'moment';
import styles from './styles';
import {AppText, Divider} from '../../../../../components';
import ItemOrderProduct from '../ItemOrderProduct/ItemOrderProduct';
import strings from '../../../../i18n';
import R from 'reactotron-react-native';
import {Fonts} from '../../../../../themes';
import {formatPrice} from '../../../../../helpers/Utils';

export default class ListOrderProduct extends Component {
  _renderItem = ({item}) => (
    <ItemOrderProduct
      data={item}
      onPressRemoveProduct={this._onPressRemoveProduct}
    />
  );

  _onPressRemoveProduct = id => {
    this.props.onPressRemoveProduct(id);
  };

  _onPress = product => {
    this.props.onPressProduct(product);
  };

  _keyExtractor = (item, index) => index;

  render() {
    const {data, user} = this.props;
    var total = 0;
    data.map(prod => (total = prod.SO_LUONG + total));

    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <AppText text={user.teN_KH} bold size={Fonts.size.large} />
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              <AppText text={strings.common.date.day + ': '} />
              <AppText text={moment().format('DD/MM/YYYY')} bold />
            </Text>

            <Text>
              <AppText text={'Tổng cộng: '} />
              <AppText text={formatPrice(total)} bold />
            </Text>
          </View>
        </View>

        <Divider />

        <FlatList
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    );
  }
}
