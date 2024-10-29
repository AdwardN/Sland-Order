import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';
import {AppInput, AppText, Divider} from '../../../../../components';
import {Colors} from '../../../../../themes';
import strings from '../../../../i18n';

export default class LoginForm extends Component {
  static propTypes = {};

  state = {
    username: '',
    password: '',
  };

  _onUserNameChange = username => {
    this.setState({
      username,
    });
  };

  _onPasswordChange = password => {
    this.setState({
      password,
    });
  };

  _onPressLogin = () => {
    this.props.onPressLogin(this.state.username, this.state.password);
  };

  render() {
    const {username, password} = this.state;
    const {error} = this.props;
    return (
      <View style={styles.container}>
        <AppInput
          style={styles.input}
          placeholder={strings.login_screen.username}
          value={username}
          onChangeText={this._onUserNameChange}
          autoCapitalize={false}
        />
        <AppInput
          style={styles.input}
          placeholder={strings.login_screen.password}
          value={password}
          onChangeText={this._onPasswordChange}
          secureTextEntry
        />
        {error ? (
          <AppText
            color={Colors.appRed}
            text={'Tài khoản hoặc mật khẩu không đúng'}
          />
        ) : null}
        <TouchableOpacity style={styles.button} onPress={this._onPressLogin}>
          <AppText
            text={strings.login_screen.button_login}
            color={Colors.appWhite}
            bold
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonforget}
          onPress={this.props.onScreenReset}>
          <AppText
            text={strings.login_screen.forget_password}
            color={Colors.appGrayColor}
            bold
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonforget}
          onPress={this.props.onScreenRegister}>
          <AppText
            text={strings.login_screen.register}
            color={Colors.appGrayColor}
            bold
          />
        </TouchableOpacity>
      </View>
    );
  }
}
