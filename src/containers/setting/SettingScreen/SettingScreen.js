import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import r from 'reactotron-react-native';
import VersionCheck from 'react-native-version-check';

import styles from './styles';
import AccountInfo from '../components/AccountInfo';
import Menu from '../components/Menu';
import LogoutButton from '../components/LogoutButton';
import CompanyInfo from '../components/CompanyInfo';
import HeaderLeft from '../components/HeaderLeft';
import {logout} from '../../../redux/user/redux/loginWithEmail';
import {replaceScreen} from '../../../redux/navigation/navigationRedux';
import {clearPayment} from '../../../redux/payment/redux/getPayment';

export class settingScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: <HeaderLeft />,
  });

  state = {
    version: '1.0',
  };

  componentDidMount() {
    this.setState({version: VersionCheck.getCurrentVersion()});
  }

  _onPressLogout = () => {
    this.props.logout();
    this.props.clearPayment();
  };

  _onChangePassword = () => {
    this.props.replaceScreen('ChangeScreen');
  };

  _onSupport = () => {
    this.props.replaceScreen('SupportScreen');
  };

  render() {
    const {user} = this.props;
    const {version} = this.state;

    return (
      <View>
        <ScrollView style={styles.container}>
          <AccountInfo
            name={user.teN_KH}
            job={'(' + user.mA_KH + ') / ' + user.email}
            avatar={user.avatar}
            changePassword={this._onChangePassword}
          />
          <Menu support={this._onSupport} />
          <CompanyInfo version={version} />
          <LogoutButton onPressLogout={this._onPressLogout} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginWithEmail.user,
});

const mapDispatchToProps = {
  logout,
  replaceScreen,
  clearPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(settingScreen);
