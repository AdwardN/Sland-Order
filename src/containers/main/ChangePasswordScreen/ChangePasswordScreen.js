import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import r from 'reactotron-react-native';
import {showMessage} from 'react-native-flash-message';

import styles from './styles';
import ChangePasswordForm from './components/ChangePasswordForm';
import {changePassword} from '../../../redux/user/redux/changePassword';
import {IconBack} from '../../../components';
import {Colors} from '../../../themes';
import {ApiResponseStatusCode} from '../../../helpers/Constants';

export class ChangePasswordScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Cập nhật mật khẩu',
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

  _onChangePassword = (oldPassword, newPassword) => {
    this.props.changePassword(oldPassword, newPassword, this.props.user.mA_KH);
  };

  componentWillReceiveProps = nextProp => {
    showMessage({
      message:
        'Cập nhật mật khẩu ' +
        (nextProp.statusCode ? 'thành công' : 'thất bại'),
      type: nextProp.statusCode ? 'success' : 'warning',
    });
    if (nextProp.statusCode) {
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <View>
        <ChangePasswordForm changePassword={this._onChangePassword} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginWithEmail.user,
    statusCode: state.changePassword.status_code,
  };
};

const mapDispatchToProps = {
  changePassword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePasswordScreen);
