import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import moment from 'moment';
import styles from './styles';
import {AppText, Divider} from '../../../../../components';
import ItemOrderProduct from '../ItemOrderProduct/ItemOrderProduct';
import strings from '../../../../i18n';
import R from 'reactotron-react-native';
import {Fonts, Colors, Metrics} from '../../../../../themes';
import {OrderStatus} from '../../../../../helpers/Constants';
import {formatPrice} from '../../../../../helpers/Utils';
('');
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
    var quantity = 0;
    var quantity2 = 0;
    console.log(data.aD91s);

    data.aD91s.map(
      prod => (
        (quantity = prod.sO_LUONG + quantity),
        (quantity2 = prod.sO_LUONG_QD + quantity2)
      ),
    );
    var totalmount = 0;
    data.aD91s.map(
      prod =>
        (totalmount =
          (prod.aD81s.length > 0
            ? prod.aD81s.map(e => e.tieN2).reduce((a, b) => a + b)
            : 0) + totalmount),
    );

    switch (data.kieU_POST) {
      case OrderStatus.ORDER:
        var backgroundColor = '#F4FEFF';
        var statusColor = '#0FAEC2';
        var status = strings.orders_screen.order_status.order;
        break;

      case OrderStatus.PROCESS:
        backgroundColor = '#FFFBF8';
        statusColor = '#FF8032';
        status = strings.orders_screen.order_status.processing;
        break;

      case OrderStatus.DELIVERY:
        backgroundColor = '#FFFBF2';
        statusColor = '#ECAA25';
        status = strings.orders_screen.order_status.delivering;
        break;

      case OrderStatus.COMPLETE:
        backgroundColor = '#F4FFF7';
        statusColor = '#26C35D';
        status = strings.orders_screen.order_status.complete;
        break;

      case OrderStatus.STOP:
        backgroundColor = '#F4FEFF';
        statusColor = '#0FAEC2';
        status = strings.orders_screen.order_status.stop;
        break;

      case OrderStatus.CANCEL:
        backgroundColor = '#FFF6F5';
        statusColor = '#F05A5C';
        status = strings.orders_screen.order_status.cancel;
        break;

      default:
        break;
    }

    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <AppText
            text={data.sO_CT}
            bold
            size={Fonts.size.large}
            color="#26C35D"
          />
          <View style={styles.dateContainer}>
            {/* <Text style={styles.date}>
              <AppText text={strings.common.date.day + ': '} />
              <AppText text={moment(data.NGAY_CT).format('DD/MM/YYYY')} bold />
            </Text> */}
            <View style={{width: '50%'}}>
              <Text
                style={{
                  marginBottom: Metrics.margin.small,
                }}>
                <AppText text={strings.common.date.day + ': '} />
                <AppText
                  text={moment(data.NGAY_CT).format('DD/MM/YYYY')}
                  bold
                />
              </Text>
              <Text>
                <AppText text={'Tổng quy đổi: '} />
                <AppText text={formatPrice(quantity2)} bold right />
              </Text>
            </View>
            <View style={styles.total}>
              <Text
                style={{
                  marginBottom: Metrics.margin.small,
                }}>
                <AppText text={'Tổng số lượng: '} />
                <AppText text={' ' + formatPrice(quantity)} bold right />
              </Text>
              <Text>
                <AppText text={'Tổng thành tiền: '} />
                <AppText text={formatPrice(totalmount) + 'đ'} bold right />
              </Text>
            </View>
          </View>
        </View>
        <AppText
          style={{
            lineHeight: 40,
            borderWidth: 1,
            borderColor: Colors.appBlue,
            marginHorizontal: Metrics.margin.large,
            textAlign: 'center',
            backgroundColor: '#F3FFFF',
            backgroundColor: backgroundColor,
            borderColor: statusColor,
          }}
          text={status}
          color={statusColor}
          bold
        />

        <FlatList
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          data={data.aD91s.sort((a, b) => {
            return a.ln - b.ln;
          })}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    );
  }
}
