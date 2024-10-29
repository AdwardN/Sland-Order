import React, {Component} from 'react';
import {View, Keyboard, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import R from 'reactotron-react-native';
import {showMessage} from 'react-native-flash-message';

import styles from './styles';
import {IconBack, IconCheck} from '../../../components';
import Render from './components/Render/Render';
import {searchColor, clearColors} from '../../../redux/order/redux/searchColor';
import {searchProd, clearProd} from '../../../redux/order/redux/searchProd';
import {
  addProduct,
  clearProduct,
  removeProduct,
  order,
} from '../../../redux/order/redux/order';
import {refreshListOrder} from '../../../redux/order/redux/getListOrder';
import {replaceScreen} from '../../../redux/navigation/navigationRedux';

export class CreateOrderScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
      title: 'Tạo đơn hàng'.toUpperCase(),
      headerLeft: (
        <IconBack
          onPress={() => {
            Alert.alert(
              'Thoát',
              'Bạn chắc chắc muốn huỷ bỏ đơn hàng hiện tại?',
              [
                {
                  text: 'Huỷ Bỏ',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Đồng Ý',
                  onPress: () => {
                    navigation.goBack();
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      ),
      headerRight: <IconCheck onPress={params._onPressOrder} />,
    };
  };

  state = {
    colorPage: 0,
    productPage: 0,
    color: '',
    product: '',
    quantity: '',
    capacity: '',
    fullForm: false,
    disableColor: false,
    itS_REC: '',
  };

  componentDidMount() {
    this.props.navigation.setParams({_onPressOrder: this._onPressOrder});
    this.props.clearProduct();
    this.props.clearColors();
    this.props.clearProd();
    this._checkUpdateOrder();

    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
  }
  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
    this.keyboardDidShowListener.remove();
  }

  _checkUpdateOrder = () => {
    const order = this.props.navigation.getParam('order', '');
    if (order) {
      this.setState({
        itS_REC: order.itS_REC,
      });
      order.aD91s.map(prod => {
        this.props.addProduct({
          itS_REC_VT_MAU: prod.itS_REC_VT_MAU,
          itS_REC_VT: prod.itS_REC_VT,
          SO_LUONG: prod.sO_LUONG,
          mA_VT: prod.mA_VT,
          mA_MAU: prod.mA_VT_MAU,
          teN_VT: prod.teN_VT,
          teN_VT_MAU: prod.teN_VT_MAU,
        });
      });
    }
  };

  keyboardDidShow = () => {
    this.setState({fullForm: true});
  };

  keyboardDidHide = () => {
    this.setState({fullForm: false});
  };

  _onChangeColor = color => {
    const colorPage = 0;
    this.setState({
      colorPage: 0,
      color,
    });
    this.props.searchColor(
      color,
      this.state.capacity
        ? parseInt(this.state.capacity) < 10
          ? '0' + this.state.capacity
          : this.state.capacity
        : '',
      colorPage,
      true,
    );
  };

  _onChangeProduct = product => {
    const productPage = 0;
    this.setState({
      productPage: 0,
      product,
    });
    this.props.searchProd(
      product,
      this.state.capacity
        ? parseInt(this.state.capacity) < 10
          ? '0' + this.state.capacity
          : this.state.capacity
        : '',
      productPage,
      true,
      this.props.user.itS_REC_KH,
    );
  };

  _onChangeQuantity = quantity => {
    this.setState({
      quantity: parseInt(quantity),
    });
  };

  _onChangeCapacity = capacity => {
    this.setState({
      capacity: capacity ? parseInt(capacity) : '',
    });
  };

  _onPressAdd = () => {
    this.setState({
      fullForm: false,
    });
    Keyboard.dismiss();

    if (this.state.product instanceof Object && this.state.quantity > 0) {
      this.props.addProduct({
        itS_REC_VT_MAU: this.state.color.itS_REC_VT,
        itS_REC_VT: this.state.product.itS_REC_VT,
        SO_LUONG: this.state.quantity,
        mA_VT: this.state.product.mA_VT,
        mA_MAU: this.state.color.mA_VT,
        teN_VT: this.state.product.teN_VT,
        teN_VT_MAU: this.state.color.teN_VT,
        THE_TICH: this.state.capacity,
      });
      this.renderView.clearForm();
      this.setState({
        colorPage: 0,
        productPage: 0,
        color: '',
        product: '',
        quantity: '',
        capacity: '',
      });
    } else {
      showMessage({
        message: 'Không đủ thông tin',
        description: 'Vui lòng điền đầy đủ thông tin sản phẩm!',
        type: 'warning',
      });
    }
  };

  _onPressRemoveProduct = id => {
    this.props.removeProduct(id);
  };

  _onPressOrder = () => {
    if (this.props.orderProducts.length > 0) {
      this.props.replaceScreen('PaymentScreen', {
        data: this.props.orderProducts,
        itS_REC: this.state.itS_REC,
      });
    } else {
      showMessage({
        message: 'Tạo đơn hàng không thành công',
        description: 'Vui lòng thêm vật tư!',
        type: 'warning',
      });
    }
  };

  render() {
    const {colors, products, orderProducts, user} = this.props;
    const {fullForm} = this.state;
    R.log(orderProducts);

    return (
      <View style={styles.container}>
        <Render
          ref={renderView => (this.renderView = renderView)}
          user={user}
          orderProducts={orderProducts}
          fullForm={fullForm}
          onChangeColor={this._onChangeColor}
          colors={colors}
          products={products}
          onChangeProduct={this._onChangeProduct}
          onChangeQuantity={this._onChangeQuantity}
          onChangeCapacity={this._onChangeCapacity}
          onPressAdd={this._onPressAdd}
          onPressRemoveProduct={this._onPressRemoveProduct}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.searchColor.colors,
  products: state.searchProd.products,
  orderProducts: state.order.orderProducts,
  user: state.loginWithEmail.user,
  orderSuccessStack: state.order.orderSuccessStack,
  orderFailureStack: state.order.orderFailureStack,
  error: state.order.error,
});

const mapDispatchToProps = {
  searchColor,
  clearColors,
  searchProd,
  clearProd,
  addProduct,
  clearProduct,
  removeProduct,
  order,
  refreshListOrder,
  replaceScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrderScreen);
