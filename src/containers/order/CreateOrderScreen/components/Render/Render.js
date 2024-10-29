import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import CreateOrderForm from '../CreateOrderForm/CreateOrderForm';
import ListOrderProduct from '../ListOrderProduct';

export default class Render extends Component {
  clearForm = () => {
    this.form.clear();
  };

  _onChangeColor = color => {
    this.props.onChangeColor(color);
  };

  _onChangeProduct = product => {
    this.props.onChangeProduct(product);
  };

  _onChangeQuantity = quantity => {
    this.props.onChangeQuantity(quantity);
  };

  _onChangeCapacity = capacity => {
    this.props.onChangeCapacity(capacity);
  };

  _onPressAdd = () => {
    this.props.onPressAdd();
  };

  _onPressRemoveProduct = id => {
    this.props.onPressRemoveProduct(id);
  };

  render() {
    const {colors, products, fullForm, orderProducts, user} = this.props;
    return (
      <View style={styles.container}>
        <ListOrderProduct
          data={orderProducts}
          user={user}
          onPressRemoveProduct={this._onPressRemoveProduct}
        />

        <CreateOrderForm
          ref={form => (this.form = form)}
          fullForm={fullForm}
          onChangeColor={this._onChangeColor}
          colors={colors}
          onChangeCapacity={this._onChangeCapacity}
          onchangeProduct={this._onChangeProduct}
          products={products}
          onChangeQuantity={this._onChangeQuantity}
          onPressAdd={this._onPressAdd}
        />
      </View>
    );
  }
}
