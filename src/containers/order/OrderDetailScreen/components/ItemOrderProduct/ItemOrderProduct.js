import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import r from 'reactotron-react-native';

import styles from './styles';
import {AppText, Divider} from '../../../../../components';
import {Fonts, Colors, Metrics} from '../../../../../themes';
import {formatPrice} from '../../../../../helpers/Utils';
import strings from '../../../../i18n';

export default class ItemOrderProduct extends Component {
  _onPressRemoveProduct = () => {
    this.props.onPressRemoveProduct(this.props.data.itS_REC_VT);
  };

  render() {
    const {teN_VT, mA_VT, teN_VT_MAU, sO_LUONG, aD81s} = this.props.data;
    const name = teN_VT_MAU ? teN_VT_MAU : '';

    return (
      <View>
        <View style={styles.container}>
          <Divider style={styles.divider} />
          <View style={styles.nameContainer}>
            <AppText style={styles.name} text={teN_VT} bold />

            <AppText text={name} color="gray" />
          </View>

          <AppText
            style={styles.quantity}
            text={formatPrice(sO_LUONG)}
            bold
            color={'red'}
          />
        </View>
        {aD81s.map(e => {
          const {sO_LUONG, datetimE0, tieN2} = e;
          const orderDate = moment(datetimE0).format('DD/MM/YYYY');
          return (
            <View>
              <Divider style={styles.divider} />
              <View style={styles.childContainer}>
                <View style={styles.childNameContainer}>
                  <AppText
                    style={styles.name}
                    text={
                      strings.orders_screen.delivery_date + ': ' + orderDate
                    }
                    color="gray"
                  />
                </View>
                <AppText
                  style={styles.childQuantity}
                  text={formatPrice(sO_LUONG)}
                  color={'gray'}
                />
              </View>
              {parseFloat(tieN2) > 0 ? (
                <View
                  style={[
                    styles.childContainer,
                    {marginTop: -Metrics.margin.huge},
                  ]}>
                  <View style={styles.childNameContainer}>
                    <AppText
                      style={styles.name}
                      text={strings.orders_screen.delivery_money}
                      color="gray"
                    />
                  </View>
                  <AppText
                    style={styles.childQuantity}
                    text={formatPrice(tieN2) + 'đ'}
                    color={'gray'}
                  />
                </View>
              ) : null}
            </View>
          );
        })}
      </View>
    );
  }
}
