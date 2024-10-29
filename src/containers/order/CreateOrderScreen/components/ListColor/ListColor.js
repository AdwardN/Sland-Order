import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import R from 'reactotron-react-native';

import styles from './styles';
import CreateOrderForm from '../CreateOrderForm/CreateOrderForm';
import {AppText, Divider} from '../../../../../components';

export default class ListColor extends Component {
  _renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => this._onPressColor(item)}>
      <AppText text={item.teN_VT} style={styles.itemTitleStyle} />
    </TouchableOpacity>
  );

  _onPressColor = color => {
    this.props.onPressColor(color);
  };

  _keyExtractor = (item, index) => index;

  _onChangeColor = color => {
    this.props.onChangeColor(color);
  };

  render() {
    const {data} = this.props;
    return data.length > 0 ? (
      <View style={styles.container}>
        <FlatList
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    ) : null;
  }
}
