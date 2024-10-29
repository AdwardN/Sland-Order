import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import r from 'reactotron-react-native';
import {showMessage} from 'react-native-flash-message';

import styles from './styles';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import {forgotPassword} from '../../../redux/user/redux/forgotPassword';
import {IconBack} from '../../../components';
import {Colors} from '../../../themes';
import {ApiResponseStatusCode} from '../../../helpers/Constants';

export class ForgotScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Quên mật khẩu',
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

  _onPressReset = email => {
    this.props.forgotPassword(email);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.status == ApiResponseStatusCode.SUCCESS) {
      showMessage({
        message: 'Khởi tạo mật khẩu thành công, mật khẩu đã được gửi về email',
        type: 'success',
      });
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'LoginScreen'})],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      showMessage({
        message: 'Có lỗi xảy ra khi khởi tạo lại mật khẩu',
        description: nextProps.error,
        type: 'warning',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ForgotPasswordForm onPressReset={this._onPressReset} />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  status: state.forgotPassword.status,
});

const mapDispatchToProps = {
  forgotPassword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotScreen);
