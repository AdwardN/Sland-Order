import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {StackActions, NavigationActions} from 'react-navigation';
import r from 'reactotron-react-native';

import styles from './styles';
import {Images} from '../../../themes';
import {logout} from '../../../redux/user/redux/loginWithEmail';

export class LauncherScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    this._navigateScreen();
  }

  _navigateScreen = () => {
    setTimeout(() => {
      if (this.props.user) {
        var resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'Home'})],
        });
      } else {
        resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'LoginScreen'})],
        });
      }

      this.props.navigation.dispatch(resetAction);
    }, 0);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <FastImage style={styles.logo} source={Images.logoApp} /> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginWithEmail.user,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LauncherScreen);
