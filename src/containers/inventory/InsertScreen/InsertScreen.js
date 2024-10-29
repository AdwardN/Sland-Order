import React, {Component} from 'react';
import {View, TouchableOpacity, Keyboard} from 'react-native';
import r from 'reactotron-react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import RenderInventoryScreen from '../RenderInventoryScreen';
import {Colors, Metrics} from '../../../themes';
import {AppText, IconBack} from '../../../components';
import strings from '../../i18n';
import {
  getListInventory,
  updateInventory,
  refreshInventories,
  resetInventory,
} from '../../../redux/inventory/redux/getListInventory';
import {order} from '../../../redux/order/redux/order';
import {refreshListOrder} from '../../../redux/order/redux/getListOrder';
import {replaceScreen} from '../../../redux/navigation/navigationRedux';

export class InsertScreen extends Component {
  state = {
    pageNumber: 0,
    disable: false,
    data: this.props.navigation.state.params.data,
    disableView: true,
  };

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
      title: 'Tạo nhanh đơn hàng'.toUpperCase(),
      headerLeft: (
        <IconBack
          size={25}
          color={Colors.appTextBlack}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: (
        <TouchableOpacity onPress={params._onResetValue}>
          <AppText text={'Đặt lại'} style={styles.reset} />
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    const {navigation} = this.props;
    navigation.setParams({_onResetValue: this._onResetValue});
    this.setState({
      disable:
        this.state.data.filter(e => {
          return e.toN00 > 0;
        }) > 0
          ? false
          : true,
    });
  }

  componentWillUnmount() {
    this._onResetValue();
  }

  _onUpdateText = (item, total) => {
    item.toN_INSERT = total;
    this.props.updateInventory(item);

    const sum =
      this.state.data.filter(e => {
        return e.toN_INSERT > 0;
      }).length > 0
        ? this.state.data
            .filter(e => {
              return e.toN_INSERT > 0;
            })
            .map(e => {
              return parseInt(e.toN_INSERT);
            })
            .reduce((a, b) => {
              return a + b;
            })
        : 0;

    if (sum == 0) this.setState({disable: true});
    else this.setState({disable: false});
  };

  _onPressOrder = () => {
    const data = this.state.data
      .filter(e => {
        return e.toN_INSERT > 0;
      })
      .map(e => {
        return {
          ...e,
          SO_LUONG: e.toN_INSERT,
        };
      });
    this.props.replaceScreen('PaymentScreen', {
      data: data,
    });
  };

  _onResetValue = () => {
    this.setState({
      data: this.state.data.map(e => {
        return {
          ...e,
          toN_INSERT: 0,
        };
      }),
      disable: true,
    });
    this.props.resetInventory();
  };

  _onActiveView = status => {
    if (status) {
      this.setState({disableView: false}, () => {
        Keyboard.dismiss();
      });
    } else {
      this.setState({disableView: true});
    }
  };

  render() {
    const {data, disableView} = this.state;
    return (
      <KeyboardAwareScrollView>
        <TouchableOpacity
          style={styles.container}
          disabled={disableView}
          onPress={() => this._onActiveView(true)}>
          <RenderInventoryScreen
            updateText={this._onUpdateText}
            inventories={data}
            showInput={true}
            activeView={this._onActiveView}
          />
          <View
            style={[
              styles.containerBottom,
              {opacity: this.state.disable ? 0.5 : 1},
            ]}>
            <TouchableOpacity
              disabled={this.state.disable}
              style={styles.btnInsert}
              onPress={this._onPressOrder}>
              <AppText
                text={strings.inventory_screen.insert_title.toUpperCase()}
                color={Colors.appWhite}
                bold
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginWithEmail.user,
    orderSuccessStack: state.order.orderSuccessStack,
    orderFailureStack: state.order.orderFailureStack,
    error: state.order.error,
  };
};

const mapDispatchToProps = {
  getListInventory,
  updateInventory,
  order,
  refreshListOrder,
  refreshInventories,
  resetInventory,
  replaceScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertScreen);
