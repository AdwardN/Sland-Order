import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import moment from 'moment-timezone';
import r from 'reactotron-react-native';

import TabNavigation from '../../../navigation/HomeTabNavigation';
import styles from './styles';
import {getPayment} from '../../../redux/payment/redux/getPayment';

export class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.user != nextProps.user && !nextProps.user) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'LoginScreen'})],
      });
      this.props.navigation.dispatch(resetAction);
    }
  };

  componentDidMount() {
    if (this.props.payments.length == 0) {
      this.props.getPayment();
    }
  }

  _onLogout = () => {
    clearInterval(this._onAlert);
    this.props.logout();
  };

  render() {
    return (
      <View style={styles.container}>
        <TabNavigation />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginWithEmail.user,
  payments: state.getPayment.payments,
});

const mapDispatchToProps = {
  getPayment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
