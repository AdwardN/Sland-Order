import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import r from 'reactotron-react-native';
import {showMessage} from 'react-native-flash-message';

import styles from './styles';
import CreateAccountForm from './components/CreateAccountScreen';
import {regAccount} from '../../../redux/user/redux/createAccount';
import {IconBack} from '../../../components';
import {Colors} from '../../../themes';
import {ApiResponseStatusCode} from '../../../helpers/Constants';

export class CreateAccountScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Đăng ký tài khoản',
    headerLeft: (
      <IconBack
        size={25}
        color={Colors.appTextBlack}
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
  });

  state = {
    error: false,
  };
  _onPressRegister = info => {
    info.PASSWORDCUST = md5(info.PASSWORDCUST);
    this.props.regAccount(info);
  };

  componentWillReceiveProps = nextProps => {
    console.log(nextProps.successStack);
    console.log(this.props.successStack);
    if (nextProps.successStack != this.props.successStack) {
      showMessage({
        message: 'Thành công.',
        description: nextProps.msg,
        type: 'success',
      });
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'LoginScreen'})],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      showMessage({
        message: 'Thất bại',
        description: nextProps.error,
        type: 'danger',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <CreateAccountForm onPressRegister={this._onPressRegister} />
      </View>
    );
  }
}

const md5 = require('md5');

const mapStateToProps = state => ({
  errorStack: state.regAccount.createAccountFailureStack,
  successStack: state.regAccount.createAccountSuccessStack,
  msg: state.regAccount.msg,
  error: state.regAccount.error,
});

const mapDispatchToProps = {
  regAccount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateAccountScreen);
