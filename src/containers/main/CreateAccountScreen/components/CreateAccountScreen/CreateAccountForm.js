import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import styles from './styles';
import {AppInput, AppText, Divider} from '../../../../../components';
import {Colors} from '../../../../../themes';
import strings from '../../../../i18n';

export default class CreateAccountScreen extends Component {
  static propTypes = {};

  state = {
    TEN_KH: '',
    DIEN_THOAI: '',
    DIA_CHI: '',
    EMAIL: '',
    PASSWORDCUST: '',
  };

  validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      showMessage({
        message: 'Email không hợp lệ.',
        type: 'warning',
      });
      this.setState({EMAIL: text});
      return false;
    } else {
      this.setState({EMAIL: text});
      console.log('Email is Correct');
    }
  };
  _onPressRegister = () => {
    this.props.onPressRegister(this.state);
  };
  _onChangeTenKh = tenKh => {
    this.setState({TEN_KH: tenKh});
  };
  _onChangeDiaChi = diaChi => {
    this.setState({DIA_CHI: diaChi});
  };
  _onChangeDienThoai = dienThoai => {
    this.setState({DIEN_THOAI: dienThoai});
  };
  _onChangePwd = pwd => {
    this.setState({PASSWORDCUST: pwd});
  };

  render() {
    const customer = this.state;
    return (
      <View style={styles.container}>
        <AppInput
          style={styles.input}
          placeholder={'Tên khách hàng'}
          value={customer.TEN_KH}
          onChangeText={this._onChangeTenKh}
          autoCapitalize={false}
        />
        <AppInput
          style={styles.input}
          placeholder={'Địa chỉ'}
          value={customer.DIA_CHI}
          onChangeText={this._onChangeDiaChi}
          autoCapitalize={false}
        />
        <AppInput
          style={styles.input}
          placeholder={'Điện thoại'}
          value={customer.DIEN_THOAI}
          onChangeText={this._onChangeDienThoai}
          autoCapitalize={false}
        />
        <AppInput
          style={styles.input}
          placeholder={'Email'}
          onChangeText={text => this.validate(text)}
          value={this.state.EMAIL}
          autoCapitalize={false}
        />
        <AppInput
          style={styles.input}
          placeholder={'Mật khẩu'}
          secureTextEntry={true}
          value={this.state.PASSWORDCUST}
          onChangeText={this._onChangePwd}
          autoCapitalize={false}
        />
        <TouchableOpacity style={styles.button} onPress={this._onPressRegister}>
          <AppText text={'Đăng ký tài khoản'} color={Colors.appWhite} bold />
        </TouchableOpacity>
      </View>
    );
  }
}
