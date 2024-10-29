import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import R from 'reactotron-react-native';
import {showMessage} from 'react-native-flash-message';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {IconBack, Button, AppText} from '../../../components';
import {getOrderDetail} from '../../../redux/order/redux/getOrderDetail';
import ListOrderProduct from './components/ListOrderProduct';
import {Colors} from '../../../themes';
import {cancelOrder} from '../../../redux/order/redux/cancelOrder';
import {refreshListOrder} from '../../../redux/order/redux/getListOrder';
import {OrderStatus} from '../../../helpers/Constants';

export class OrderDetailScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Chi tiết đơn hàng',
      headerLeft: (
        <IconBack
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: navigation.state.params.buttonEditVisible ? (
        <TouchableOpacity
          style={styles.buttonUpdate}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={navigation.state.params._onPressEdit}>
          <AppText text="Sửa" color={Colors.appBlue} />
        </TouchableOpacity>
      ) : null,
    };
  };

  state = {};

  componentDidMount = () => {
    const order = this.props.navigation.getParam('order', '');
    this.props.getOrderDetail(order.itS_REC);

    this.props.navigation.setParams({
      buttonEditVisible: order ? order.kieU_POST == OrderStatus.ORDER : false,
    });
    this.props.navigation.setParams({_onPressEdit: this._onPressEdit});
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.orderFailureStack != this.props.orderFailureStack) {
      showMessage({
        message: 'Yêu cầu huỷ đơn hàng thất bại',
        description: nextProps.error,
        type: 'warning',
      });
    }

    if (this.props.orderSuccessStack != nextProps.orderSuccessStack) {
      showMessage({
        message: 'Yêu cầu huỷ đơn hàng thành công',
        // description: 'Vui lòng điền đầy đủ thông tin sản phẩm!',
        type: 'success',
      });
      this.props.refreshListOrder();
      this.props.navigation.goBack();
    }
  };

  _onPressEdit = () => {
    this.props.navigation.navigate('CreateOrderScreen', {
      order: this.props.order,
    });
  };
  _onPressCancel = () => {
    this.props.cancelOrder(this.props.order.itS_REC);
  };

  render() {
    const {order, user} = this.props;

    var buttonVisible = order ? order.kieU_POST == OrderStatus.ORDER : false;

    return (
      <View style={styles.container}>
        {order ? <ListOrderProduct data={order} /> : null}

        {order && buttonVisible ? (
          <Button
            style={styles.button}
            title="Yêu cầu huỷ đơn"
            onPress={this._onPressCancel}
            color={Colors.appRed}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  order: state.getOrderDetail.order,
  user: state.loginWithEmail.user,
  orderSuccessStack: state.cancelOrder.orderSuccessStack,
  orderFailureStack: state.cancelOrder.orderFailureStack,
  error: state.cancelOrder.error,
});

const mapDispatchToProps = {
  getOrderDetail,
  cancelOrder,
  refreshListOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderDetailScreen);
