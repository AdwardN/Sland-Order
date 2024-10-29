import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import R from 'reactotron-react-native';

import styles from './styles';
import {Button, AppInput} from '../../../../../components';
import strings from '../../../../i18n';
import ListColor from '../ListColor';
import ListProduct from '../ListProduct/ListProduct';
import {formatPrice} from '../../../../../helpers/Utils';
import {Colors} from '../../../../../themes';

export default class CreateOrderForm extends Component {
  state = {
    product: '',
    color: '',
    quantity: 0,
    productListVisible: false,
    colorListVisible: false,
    colorDisable: false,
    capacity: 0,
    disableView: true,
  };

  clear = () => {
    this.setState({
      product: '',
      color: '',
      quantity: '',
      capacity: '',
      productListVisible: false,
      colorListVisible: false,
    });
  };

  _onChangeName = product => {
    this.setState({
      colorDisable: false,
      product,
      productListVisible: true,
    });
    this.props.onchangeProduct(product);
  };

  _onChangeQuantity = quantity => {
    iQuantity = quantity.replace(/\,/g, '');
    iQuantity = iQuantity.replace(/\./g, '');

    this.setState({
      quantity: formatPrice(iQuantity),
    });
    this.props.onChangeQuantity(iQuantity);
  };

  _onChangeCapacity = capacity => {
    iCapacity = capacity.replace(/\,/g, '');
    iCapacity = iCapacity.replace(/\./g, '');

    this.setState({
      capacity: parseInt(capacity),
      productListVisible: false,
      product: '',
      color: '',
    });
    this.props.onChangeCapacity(iCapacity);
  };

  _onFocusName = () => {
    this._onActiveView(false);
    if (parseInt(this.state.capacity) > 0) {
      this.props.onchangeProduct('');
      this.setState({productListVisible: true});
    }
  };

  _onChangeColor = color => {
    this.setState({
      color,
      colorListVisible: true,
    });
    this.props.onChangeColor(color);
  };

  _onInputColorBlur = () => {};

  _onPressColor = color => {
    this.setState({
      color: color.teN_VT,
      colorListVisible: false,
    });
    this.props.onChangeColor(color);
  };

  _onPressProduct = product => {
    if (product.loaI_VT == 51) {
      this.setState({
        colorDisable: false,
        product: product.teN_VT,
        productListVisible: false,
      });
      this.props.onchangeProduct(product);
    } else {
      this.setState({
        colorDisable: true,
        color: '',
        product: product.teN_VT,
        productListVisible: false,
      });
      this.props.onchangeProduct(product);
    }
  };

  _onPressAdd = () => {
    this.props.onPressAdd();
  };

  _onActiveView = status => {
    R.log(status);
    if (status) {
      this.setState({disableView: false}, () => {
        Keyboard.dismiss();
      });
    } else {
      this.setState({disableView: true});
    }
  };

  render() {
    const {fullForm, colors, products} = this.props;
    const {
      product,
      quantity,
      color,
      productListVisible,
      colorListVisible,
      colorDisable,
      capacity,
      disableView,
    } = this.state;
    return (
      <TouchableOpacity
        style={[styles.container, fullForm ? {top: 20} : {}]}
        disabled={!disableView}
        onPress={() => this._onActiveView(true)}>
        <AppInput
          style={styles.input}
          placeholder={strings.create_order_screen.form.capacity}
          value={capacity}
          onChangeText={this._onChangeCapacity}
          keyboardType="numeric"
          maxLength={2}
          onFocus={() => {
            this._onActiveView(false);
          }}
        />

        <AppInput
          style={styles.input}
          placeholder={strings.create_order_screen.form.product}
          value={product}
          onChangeText={this._onChangeName}
          onFocus={this._onFocusName}
        />

        {productListVisible ? (
          <ListProduct data={products} onPressProduct={this._onPressProduct} />
        ) : null}

        <AppInput
          style={[styles.input, {opacity: colorDisable ? 0.5 : 1}]}
          placeholder={strings.create_order_screen.form.color}
          value={color}
          onChangeText={this._onChangeColor}
          onBlur={this._onInputColorBlur}
          editable={!colorDisable}
          onFocus={() => {
            this._onActiveView(false);
          }}
        />

        {colorListVisible ? (
          <ListColor data={colors} onPressColor={this._onPressColor} />
        ) : null}

        <AppInput
          style={styles.input}
          placeholder={strings.create_order_screen.form.quantity}
          value={quantity}
          onChangeText={this._onChangeQuantity}
          keyboardType="numeric"
          onFocus={() => {
            this._onActiveView(false);
          }}
        />

        <Button
          color={Colors.appColorOrange}
          title={strings.create_order_screen.button}
          onPress={this._onPressAdd}
        />
      </TouchableOpacity>
    );
  }
}
