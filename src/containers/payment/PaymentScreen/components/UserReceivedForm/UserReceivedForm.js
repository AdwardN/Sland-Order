import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import moment from 'moment';

import styles from './styles';
import {AppInput, AppText, Divider} from '../../../../../components';
import strings from '../../../../i18n';
import {Colors} from '../../../../../themes';

export default class UserReceivedForm extends Component {
  _onChangeName = name => {
    this.props.onChangeName(name);
  };

  _onChangePhone = phone => {
    phone = phone.replace(/\,/g, '').replace(/\./g, '');
    this.props.onChangePhone(phone);
  };

  _onChangeAddress = address => {
    this.props.onChangeAddress(address);
  };

  render() {
    const {payment, idPayment, name, address, phone} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.containerItem}>
          <AppText
            style={styles.title}
            text={strings.payment_screen.dateTitle}
            bold
          />
          <AppText text={moment().format('DD/MM/YYYY')} />
        </View>
        <Divider />
        <View style={styles.containerItem}>
          <AppText
            style={styles.title}
            text={strings.payment_screen.paymentTitle}
            bold
          />
          <TouchableOpacity
            style={styles.payment}
            onPress={() => this.props.modalVisible(true)}>
            {idPayment ? (
              <AppText text={payment} color={Colors.appColorGreen} bold />
            ) : (
              <AppText text={payment} italic />
            )}
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.containerItemInfo}>
          <AppText text={strings.payment_screen.userTitle} bold />
          <AppInput
            placeholder={strings.payment_screen.userTitle}
            style={styles.input}
            value={name}
            onChangeText={this._onChangeName}
          />
        </View>
        <Divider />
        <View style={styles.containerItemInfo}>
          <AppText text={strings.payment_screen.phoneTitle} bold />
          <AppInput
            placeholder={strings.payment_screen.phoneTitle}
            style={styles.input}
            value={phone}
            onChangeText={this._onChangePhone}
            keyboardType="numeric"
          />
        </View>
        <Divider />
        <View style={styles.containerItemInfo}>
          <AppText text={strings.payment_screen.addressTitle} bold />
          <AppInput
            placeholder={strings.payment_screen.addressTitle}
            style={styles.input}
            value={address}
            onChangeText={this._onChangeAddress}
          />
        </View>
        <Divider />
      </View>
    );
  }
}
