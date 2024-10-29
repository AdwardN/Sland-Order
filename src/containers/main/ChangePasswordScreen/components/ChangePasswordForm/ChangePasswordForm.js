import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import r from 'reactotron-react-native';

import styles from './styles';
import {AppInput, AppText, Divider} from '../../../../../components';
import {Colors, Metrics, Fonts} from '../../../../../themes';
import strings from '../../../../i18n';

export default class LoginForm extends Component {
  static propTypes = {};

  state = {
    passwordOld: '',
    passwordNew: '',
    rePasswordNew: '',
    error: 'Mật khẩu mới chưa trùng nhau',
    isDuplicate: true,
  };

  _onOldPasswordChange = passwordOld => {
    this.setState({
      passwordOld,
    });
  };

  _onNewPasswordChange = passwordNew => {
    this.setState({
      passwordNew,
    });
  };

  _onRePasswordChange = rePasswordNew => {
    this.setState({
      rePasswordNew,
      isDuplicate: this.state.passwordNew === rePasswordNew ? true : false,
    });
  };

  _onPressLogin = () => {
    this.props.changePassword(this.state.passwordOld, this.state.passwordNew);
  };

  render() {
    const {passwordNew, passwordOld, rePasswordNew} = this.state;
    return (
      <View style={styles.container}>
        <AppInput
          style={styles.input}
          placeholder={strings.logout_screen.oldPassword}
          value={passwordOld}
          onChangeText={this._onOldPasswordChange}
          secureTextEntry
        />
        <AppInput
          style={styles.input}
          placeholder={strings.logout_screen.newPassword}
          value={passwordNew}
          onChangeText={this._onNewPasswordChange}
          secureTextEntry
        />
        <AppInput
          style={styles.input}
          placeholder={strings.logout_screen.reNewPassword}
          value={rePasswordNew}
          onChangeText={this._onRePasswordChange}
          secureTextEntry
        />
        {!this.state.isDuplicate ? (
          <AppText
            text={this.state.error}
            color={Colors.appRed}
            center
            style={styles.error}
          />
        ) : null}
        <TouchableOpacity
          disabled={!(this.state.isDuplicate && this.state.rePasswordNew)}
          style={[styles.button]}
          onPress={this._onPressLogin}>
          <AppText
            text={strings.logout_screen.updatePassword}
            color={Colors.appWhite}
            bold
          />
        </TouchableOpacity>
      </View>
    );
  }
}
