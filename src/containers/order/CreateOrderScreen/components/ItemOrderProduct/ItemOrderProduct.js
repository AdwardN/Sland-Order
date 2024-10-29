import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {AppText, Divider} from '../../../../../components';
import {Fonts, Colors} from '../../../../../themes';
import {formatPrice} from '../../../../../helpers/Utils';

export default class ItemOrderProduct extends Component {
  _onPressRemoveProduct = () => {
    this.props.onPressRemoveProduct(this.props.data.itS_REC_VT);
  };

  render() {
    const {teN_VT, mA_VT, teN_VT_MAU, SO_LUONG, THE_TICH} = this.props.data;
    const mau = teN_VT_MAU ? teN_VT_MAU : '';
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <AppText style={styles.name} text={teN_VT} bold />

          <AppText text={mau} color="gray" />
        </View>

        <AppText
          style={styles.quantity}
          text={formatPrice(SO_LUONG)}
          bold
          color={'red'}
        />

        <TouchableOpacity
          style={styles.iconClose}
          hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}
          onPress={this._onPressRemoveProduct}>
          <Ionicons
            size={22}
            name="ios-close-circle-outline"
            color={Colors.appTextBlack}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
