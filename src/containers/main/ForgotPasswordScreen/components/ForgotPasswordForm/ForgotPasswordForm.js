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
  };

  _onUserNameChange = username => {
    this.setState({
      username,
    });
  };

  _onPressReset = () => {
    this.props.onPressReset(this.state.username);
  };

  render() {
    const {username, password} = this.state;
    return (
      <View style={styles.container}>
        <AppInput
          style={styles.input}
          placeholder={'Email'}
          value={username}
          onChangeText={this._onUserNameChange}
          autoCapitalize={false}
        />

        <TouchableOpacity style={styles.button} onPress={this._onPressReset}>
          <AppText text={'Cấp lại mật khẩu'} color={Colors.appWhite} bold />
        </TouchableOpacity>
      </View>
    );
  }
}
