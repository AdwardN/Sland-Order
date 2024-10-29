import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';
import {AppText, Divider} from '../../../../components';
import {Colors} from '../../../../themes';

export default class LogoutButton extends Component {
  _onPressLogout = () => {
    this.props.onPressLogout();
  };

  render() {
    const {style} = this.props;
    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity
          style={styles.itemMenuContainer}
          onPress={this._onPressLogout}>
          <AppText text="Đăng xuất" color={Colors.appWhite} />
        </TouchableOpacity>
      </View>
    );
  }
}
