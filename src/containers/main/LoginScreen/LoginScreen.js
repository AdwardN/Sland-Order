import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import r from 'reactotron-react-native';
import {showMessage} from 'react-native-flash-message';

import styles from './styles';
import LoginForm from './components/LoginForm';
import Title from './components/Title';
import {loginWithEmail} from '../../../redux/user/redux/loginWithEmail';

export class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    error: false,
  };

  _onPressLogin = (email, password) => {
    this.props.loginWithEmail(email, password);
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.successStack != nextProps.successStack) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      showMessage({
        message: 'Đăng nhập không thành công',
        description: 'Tài khoản hoặc mật khẩu không đúng',
        type: 'warning',
      });
    }
  };

  _onScreenReset = () => {
    this.props.navigation.navigate('ForgotScreen');
  };

  _onScreenRegister = () => {
    this.props.navigation.navigate('CreateAccountScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <Title />
        <LoginForm
          onScreenReset={this._onScreenReset}
          onScreenRegister={this._onScreenRegister}
          onPressLogin={this._onPressLogin}
          error={this.state.error}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.loginWithEmail.user,
  errorStack: state.loginWithEmail.errorStack,
  successStack: state.loginWithEmail.successStack,
});

const mapDispatchToProps = {
  loginWithEmail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
