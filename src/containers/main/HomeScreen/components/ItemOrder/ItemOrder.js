import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import r from 'reactotron-react-native';
import moment from 'moment';

import styles from './styles';
import {AppText, Divider} from '../../../../../components';
import {Colors} from '../../../../../themes';
import strings from '../../../../i18n';
import {status_order, OrderStatus} from '../../../../../helpers/Constants';
import R from 'reactotron-react-native';

export default class ItemOrder extends Component {
  _onPressItem = () => {
    this.props.onPressItem(this.props.data);
  };

  render() {
    const {
      sO_CT,
      ngaY_CT,
      ngaY_LCT,
      tonG_SO_LUONG,
      kieU_POST,
    } = this.props.data;

    const orderDate = moment(ngaY_CT).format('DD/MM/YYYY');
    const deliveryDate = moment(ngaY_LCT).format('DD/MM/YYYY');

    var backgroundColor;
    var statusColor;
    var status;

    switch (kieU_POST) {
      case OrderStatus.ORDER:
        backgroundColor = '#F4FEFF';
        statusColor = '#0FAEC2';
        status = strings.orders_screen.order_status.order;
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
      <TouchableOpacity
        style={[styles.container, {backgroundColor}]}
        onPress={this._onPressItem}>
        <View style={styles.infoContainer}>
          <Text style={styles.itemText}>
            <AppText text={strings.orders_screen.order_no + ': '} bold />
            <AppText text={sO_CT} />
          </Text>
          <Text style={styles.itemText}>
            <AppText text={strings.orders_screen.order_date + ': '} bold />
            <AppText text={orderDate} />
          </Text>
          {/* <Text style={styles.itemText}>
            <AppText text={strings.orders_screen.delivery_date + ': '} bold />
            <AppText text={deliveryDate} />
          </Text> */}
        </View>

        <View style={styles.statusContainer}>
          {/* <View style={styles.itemNumber}>
            <AppText text={tonG_SO_LUONG} />
          </View> */}

          <AppText
            text={status.toUpperCase()}
            bold
            style={styles.itemStatus}
            color={statusColor}
          />
        </View>

        <Divider style={styles.divider} />
      </TouchableOpacity>
    );
  }
}
