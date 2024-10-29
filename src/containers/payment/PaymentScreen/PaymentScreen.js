import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import r from 'reactotron-react-native';
import {showMessage} from 'react-native-flash-message';

import styles from './styles';
import UserReceivedForm from './components/UserReceivedForm';
import {IconBack, AppText, Button} from '../../../components';
import {Colors} from '../../../themes';
import ModalPayment from './components/ModalPayments';
import strings from '../../i18n';
import {order} from '../../../redux/order/redux/order';
import {refreshListOrder} from '../../../redux/order/redux/getListOrder';
import {replaceScreen} from '../../../redux/navigation/navigationRedux';

export class PaymentScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
      title: 'Thông tin đơn hàng'.toUpperCase(),
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
        <TouchableOpacity onPress={params._onPressCancel}>
          <AppText text={'Huỷ bỏ'} style={styles.cancel} />
        </TouchableOpacity>
      ),
    };
  };

  state = {
    isVisible: false,
    text: strings.payment_screen.titleButton,
    idPayment: '',
    name: this.props.user.teN_KH,
    phone: this.props.user.dieN_THOAI,
    address: this.props.user.diA_CHI,
    itS_REC: '',
  };

  componentDidMount() {
    const {navigation} = this.props;
    navigation.setParams({_onPressCancel: this._onPressCancel});
    this._checkUpdate();
  }

  _checkUpdate = () => {
    const itS_REC = this.props.navigation.getParam('itS_REC', '');
    this.setState({
      itS_REC,
    });
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.orderFailureStack != this.props.orderFailureStack) {
      showMessage({
        message: 'Tạo đơn hàng không thành công',
        description: nextProps.error,
        type: 'warning',
      });
    }

    if (this.props.orderSuccessStack != nextProps.orderSuccessStack) {
      showMessage({
        message: 'Tạo đơn hàng thành công',
        // description: 'Vui lòng điền đầy đủ thông tin sản phẩm!',
        type: 'success',
      });
      this.props.refreshListOrder();
      this.props.navigation.navigate('Home');
    }
  };

  _onModalVisible = (status, text, id = '') => {
    this.setState({
      isVisible: status,
      text: text ? text : strings.payment_screen.titleButton,
      idPayment: id,
    });
  };

  _onChangeName = name => {
    this.setState({name});
  };

  _onChangePhone = phone => {
    this.setState({phone});
  };

  _onChangeAddress = address => {
    this.setState({address});
  };

  _onPressOrder = () => {
    const {idPayment, name, phone, address, itS_REC} = this.state;
    r.log(name, idPayment, phone, address);

    const {user, navigation} = this.props;
    const data = navigation.state.params.data;
    if (name && idPayment && phone && address) {
      this.props.order(
        user.itS_REC_KH,
        user.itS_REC_KHO,
        idPayment,
        name,
        phone,
        address,
        data,
        itS_REC,
      );
    } else {
      showMessage({
        message: 'Hoàn thành đơn hàng không thành công',
        description: 'Vui lòng kiểm tra lại thông tin!',
        type: 'warning',
      });
    }
  };

  _onPressCancel = () => {
    Alert.alert(
      'Xác nhận',
      'Bạn có muốn huỷ bỏ đơn hàng vừa tạo không',
      [
        {
          text: 'Huỷ bỏ',
        },
        {
          text: 'Chấp nhận',
          onPress: () => {
            this.props.refreshListOrder();
            this.props.navigation.navigate('Home');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {payments} = this.props;
    const {isVisible, text, idPayment, name, phone, address} = this.state;

    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <UserReceivedForm
          onChangeName={this._onChangeName}
          onChangePhone={this._onChangePhone}
          onChangeAddress={this._onChangeAddress}
          modalVisible={this._onModalVisible}
          payment={text}
          idPayment={idPayment}
          name={name}
          phone={phone}
          address={address}
        />

        <Button
          title={strings.payment_screen.button}
          style={styles.button}
          onPress={this._onPressOrder}
        />
        <ModalPayment
          visible={isVisible}
          data={payments}
          modalVisible={this._onModalVisible}
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginWithEmail.user,
  payments: state.getPayment.payments,
  orderSuccessStack: state.order.orderSuccessStack,
  orderFailureStack: state.order.orderFailureStack,
});

const mapDispatchToProps = {order, refreshListOrder, replaceScreen};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);
