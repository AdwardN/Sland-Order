import React, {Component} from 'react';
import {View, Text} from 'react-native';
import r from 'reactotron-react-native';

import styles from './styles';
import {AppText, Divider, AppInput} from '../../../../components';
import {Colors} from '../../../../themes';
import {formatPrice} from '../../../../helpers/Utils';

export default class ItemInventory extends Component {
  state = {
    toN: 0,
  };

  _onchangeText = text => {
    iQuantity = text.replace(/\,/g, '').replace(/\-/g, '');
    if (!iQuantity) iQuantity = 0;
    this.setState({toN: parseInt(iQuantity)});
    this.props.updateText(this.props.data, parseInt(iQuantity));
  };

  render() {
    const {data, showInput} = this.props;
    const ton = formatPrice(data.toN_INSERT);

    return showInput ? (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <AppText style={styles.itemText} text={data.teN_VT} bold />
          <Text style={styles.itemText}>
            {data.teN_VT_MAU !== '' ? <AppText text={data.teN_VT_MAU} /> : null}
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.itemNumber}>
            <AppText
              text={formatPrice(data.toN00)}
              color={data.toN00 < 0 ? Colors.appRed : null}
            />
          </View>
          <View style={styles.itemInput}>
            <AppInput
              style={styles.input}
              clearButtonMode={'never'}
              value={ton}
              onChangeText={this._onchangeText}
              keyboardType="numeric"
              onFocus={() => {
                this.props.activeView(false);
              }}
            />
          </View>
        </View>
        <Divider style={styles.divider} />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <AppText style={styles.itemText} text={data.teN_VT} bold />
          <Text style={styles.itemText}>
            {data.teN_VT_MAU !== '' ? <AppText text={data.teN_VT_MAU} /> : null}
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.itemNumber}>
            <AppText
              text={formatPrice(data.toN00)}
              color={data.toN00 < 0 ? Colors.appRed : null}
            />
          </View>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
  }
}
